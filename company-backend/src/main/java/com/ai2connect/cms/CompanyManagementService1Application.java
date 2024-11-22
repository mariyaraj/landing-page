package com.ai2connect.cms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration;

@SpringBootApplication(exclude = {BatchAutoConfiguration.class},scanBasePackages = "com.ai2connect")
public class CompanyManagementService1Application {

	public static void main(String[] args) {
		SpringApplication.run(CompanyManagementService1Application.class, args);
	}

}
