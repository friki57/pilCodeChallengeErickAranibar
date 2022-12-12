package com.demos.pilentrevista.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demos.pilentrevista.model.Product;
import com.demos.pilentrevista.model.repo.ProductRepo;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {
     @Autowired
     ProductRepo productRep;

     @CrossOrigin
     @GetMapping("all")
     List<Product> all()
     {
          return productRep.findAll();
     }

     @CrossOrigin
     @GetMapping("{ind}")
     List<Product> page(@PathVariable int ind) {
          List<Product> list = productRep.findAll();
          int cantPage = 20;
          if(ind<=0 || ind*cantPage>list.size())
          {
               return Collections.emptyList();
          }
          else{
               ind-=1;
               return productRep.findAll().subList(ind*cantPage, ind*cantPage + cantPage);
          }
     }

     @GetMapping("/cant")
     int cant() {
          return productRep.findAll().size();
     }

     @GetMapping("/name")
     List<Product> name(@RequestParam("name") String name) {
          return productRep.findAll().stream()
               .filter(prod->prod.getProduct_name().contains(name)).toList();
     }

}
