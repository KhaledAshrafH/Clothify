package org.ntg.training.backendForPortal.dto;

public class LoginResponse {

    public LoginResponse(){}

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    private String full_name;

    public LoginResponse(String full_name, String errorMessage) {
        this.full_name = full_name;
        this.errorMessage = errorMessage;
    }

    private String errorMessage;

}
