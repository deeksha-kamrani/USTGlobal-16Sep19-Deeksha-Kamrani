package com.ustglobal.libms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.service.LoginService;
import com.ustglobal.libms.service.LoginServiceImpl;

@RestController
@CrossOrigin(origins="*", allowedHeaders = "*", allowCredentials = "true")
public class LoginController {

	@Autowired
	LoginService service = new LoginServiceImpl();

	@PostMapping("login")
	public Users login(@RequestBody Users users) {
		Users user = null;
		try {
			user = service.login(users);
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return user;
	}// end of login()

}
