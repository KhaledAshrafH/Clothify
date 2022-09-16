package org.ntg.training.backendForPortal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin_users")
public class users {
    @Id
    @Column(name = "id")
    private Long recID;

    @Column(name = "user_name")
    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    private String password;

    private String fullName;

    public void setRecID(Long recID) {
        this.recID = recID;
    }


    public Long getRecID() {
        return recID;
    }
}
