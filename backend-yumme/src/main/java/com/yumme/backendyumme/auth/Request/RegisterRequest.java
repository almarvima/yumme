package com.yumme.backendyumme.auth.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    String userName;
    String name;
    String lastName;
    String pwd;
    String email;
}
