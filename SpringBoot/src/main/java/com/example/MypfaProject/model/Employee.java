package com.example.MypfaProject.model;


import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
@Entity
@Table(name="employees")
public class Employee {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private long id;
@Column(name="first_name")
private String firstName;
@Column(name="last_name")
private String lastName;
@Column(name="email")
private String email;

public Employee() {}
public Employee(String firstName, String lastName, String email) {
super();
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
}
public long getId() {
return id;
}
public void setId(long id) {
this.id = id;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String firstName) {
this.firstName = firstName;
}
public String getLastName() {
return lastName;
}
public void setLastName(String lastName) {
this.lastName = lastName;
}
public String getEmail() {
return email;
}
public void setEmail(String emailId) {
this.email = emailId;
}



}
