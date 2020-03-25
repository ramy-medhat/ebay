package com.ebayk.data.user;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserRepository {

    public User getUser(Integer id) {
        for (User user : SampleData.USERS) {
            if (user.getId().equals(id)) {
                return user;
            }
        }
        return null;
    }

    public List<User> getUsers() {
        return SampleData.USERS;
    }

}
