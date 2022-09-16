package org.ntg.training.backendForPortal.repos;

 import org.ntg.training.backendForPortal.entities.users;
 import org.springframework.data.repository.CrudRepository;
 import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends CrudRepository<users,Long> {

   users findByUserNameAndPassword(String  user_name, String password);

}
