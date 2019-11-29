package com.ustglobal.empspringmvc.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.ustglobal.empspringmvc.dto.EmployeeBean;
import com.ustglobal.empspringmvc.service.EmployeeService;

@Controller
public class EmployeeController {

	@Autowired
	private EmployeeService service; 

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		CustomDateEditor editor = new CustomDateEditor(format, true);
		binder.registerCustomEditor(Date.class, editor);
	}


	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}// end of login page


	@PostMapping("/login")
	public String login(int id, String password, HttpServletRequest request) {
		EmployeeBean bean = service.login(id, password);
		if(bean==null) { // If invalid id or password
			request.setAttribute("msg", "Invalid Credentials");
			return "login"; // Go back to login
		}else {
			HttpSession session = request.getSession(); // if credentials are right or true
			session.setAttribute("bean", bean); // set the attributes
			return "home"; // and go back to home
		}
	}// end of login()


	@GetMapping("/register")
	public String registerPage() {
		return "register"; 
	}//end of register page


	@PostMapping("/register")
	public String register(EmployeeBean bean, ModelMap map) {

		int check = service.register(bean); //registering
		if(check>0) {
			map.addAttribute("msg", "You are Registered and id is "+check);
		}else {
			map.addAttribute("msg", "Email is repeated");
		}
		return "login";
	}// end of register()


	@GetMapping("/home")
	public String home(ModelMap map, @SessionAttribute(name = "bean" , required = false) EmployeeBean bean) {
		if(bean==null) { // if details are not filled
			map.addAttribute("msg" , "Login First!!!");
			return "login";
		}else {
			return "home";		
		}
	}//end of home


	@PostMapping("/home")
	public String home() {
		return "home";	
	}// end of home()


	@GetMapping("/search")
	public String search(@RequestParam("id")int id, ModelMap map) {
		EmployeeBean bean = service.searchEmployee(id);
		if(bean==null) { // id cannot be found
			map.addAttribute("msg", "Data Not Found");
		}else {
			map.addAttribute("bean", bean); // print the table
		}
		return "home";
	}


	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "login";
	}// end of logout


	@GetMapping("/delete")
	public String deleteProfile(HttpSession session) {
		EmployeeBean bean = (EmployeeBean)session.getAttribute("bean");
		try {
			service.deleteEmployee(bean.getId());
		}catch (Exception e) {
			e.printStackTrace();
		}
		session.invalidate();
		return "login";
	}// end of deleteProfile()

	@GetMapping("/changepassword")
	public String changePassword(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session!=null) {
			return "changepassword";
		}else {
			return "login";
		}

	}//end of changePassword()

	
	@PostMapping("/changepassword")
	public String changePassword(String password,String confirmpassword,
			@SessionAttribute(name="bean")EmployeeBean bean, ModelMap map) {
		if(password.equals(confirmpassword)) {
			service.changePassword(bean.getId(), password);
			map.addAttribute("msg","Password changed");
		}else {
			map.addAttribute("msg","Password Not Matching");
		}
		return "home";
	}
	
	@GetMapping("/updateprofile")
	public String updateProfile(HttpServletRequest req) {
		HttpSession session = req.getSession(false);
		if(session!=null) {
			return "updateprofile";
		}else {
			return "login";
		}
	}
	
	
	@PostMapping("/updateprofile")
	public String updateProfile(String name, String email, Date doj, ModelMap map, 
		@SessionAttribute(name="bean")EmployeeBean bean) {
			bean.setName(name);
			bean.setEmail(email);
			bean.setDoj(doj);
			service.updateEmployee(bean);
			map.addAttribute("msg","Profile updated");
			return "home";
		}
		
	}