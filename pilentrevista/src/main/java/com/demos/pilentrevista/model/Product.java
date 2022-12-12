package com.demos.pilentrevista.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Product {
    @Id
    String _id;
    int id;
    String product_name;
    int stock;
    String product_image;
}
