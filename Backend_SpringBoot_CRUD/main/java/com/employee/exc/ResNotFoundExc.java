package com.employee.exc;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResNotFoundExc extends RuntimeException {

	public ResNotFoundExc(String m) {
		super(m);
		// TODO Auto-generated constructor stub
	}

	

	
	
}
