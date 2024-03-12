package com.yumme.backendyumme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class})
public class BackendYummeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendYummeApplication.class, args);

		System.out.println("Hello World");
	}


}
