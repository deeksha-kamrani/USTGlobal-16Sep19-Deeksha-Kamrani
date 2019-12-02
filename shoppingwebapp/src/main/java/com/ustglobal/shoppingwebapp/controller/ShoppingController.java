package com.ustglobal.shoppingwebapp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.ustglobal.shoppingwebapp.beans.Retailer;
import com.ustglobal.shoppingwebapp.repo.ShoppingRepo;

@Controller
public class ShoppingController {
	
	@Autowired
	private ShoppingRepo repo;
	
	
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}


	@PostMapping("/login")
	public String login(int retailerId, String password, HttpServletRequest request) {
		Retailer bean = repo.login(retailerId, password);
		if(bean==null) { 
			request.setAttribute("msg", "Invalid Credentials");
			return "login"; 
		}else {
			HttpSession session = request.getSession(); 
			session.setAttribute("bean", bean); 
			return "home";
		}
	}
	
	@GetMapping("/register")
	public String registerPage() {
		return "register"; 
	}


	@PostMapping("/register")
	public String register(Retailer bean, ModelMap map) {

		int check = repo.register(bean); 
		if(check>0) {
			map.addAttribute("msg", "You are Registered and id is "+check);
		}else {
			map.addAttribute("msg", "Not Registered");
		}
		return "login";
	}
	
	
	
	
	
	@GetMapping("/home")
	public String home(ModelMap map, @SessionAttribute(name = "bean" , required = false) Retailer bean) {
		if(bean==null) { 
			map.addAttribute("msg" , "Login First!!!");
			return "login";
		}else {
			return "home";		
		}
	}


	@PostMapping("/home")
	public String home() {
		return "home";	
	}
	
	
	@GetMapping("/search")
	public String search(@RequestParam("retailerId")int retailerId, ModelMap map) {
		Retailer bean = repo.searchProduct(retailerId);
		if(bean==null) { 
			map.addAttribute("msg", "Data Not Found");
		}else {
			map.addAttribute("bean", bean); 
		}
		return "home";
	}


	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "login";
	}


	@GetMapping("/updatepassword")
	public String updatePassword(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session!=null) {
			return "updatepassword";
		}else {
			return "login";
		}

	}


	@PostMapping("/updatepassword")
	public String updatePassword(String password,String confirmpassword,
			@SessionAttribute(name="bean")Retailer bean, ModelMap map) {
		if(password.equals(confirmpassword)) {
			repo.updatePassword(bean.getRetailerId(), password);
			map.addAttribute("msg","Password changed");
		}else {
			map.addAttribute("msg","Password Not Matching");
		}
		return "home";
	}
	
}
