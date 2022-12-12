package com.demos.pilentrevista.model.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.demos.pilentrevista.model.Product;

public interface ProductRepo extends MongoRepository<Product, String> {
    
}
