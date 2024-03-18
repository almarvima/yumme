package com.yumme.backendyumme.dto.response;

import com.yumme.backendyumme.domain.User;

public class ValidationResponse {

    private boolean isValid;
    private String userName;

    // Constructor
    public ValidationResponse(boolean isValid, String userName) {
        this.isValid = isValid;
        this.userName = userName;
    }
    public boolean isValid() {
        return isValid;
    }

    public String getUserName() {
        return userName;
    }

    public void setValid(boolean isValid) {
        this.isValid = isValid;
    }

    public void setUser(User user) {
        this.userName = userName;
    }
}
