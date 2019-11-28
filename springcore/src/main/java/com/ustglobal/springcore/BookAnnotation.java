package com.ustglobal.springcore;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.springcore.config.BookConfiguration;
import com.ustglobal.springcore.di.Author;
import com.ustglobal.springcore.di.Book;

public class BookAnnotation {

	public static void main(String[] args) {

		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(BookConfiguration.class);
		
		Book book = context.getBean(Book.class);
		System.out.println(book.getAuthor());
		System.out.println(book.getName());
		System.out.println(book.getPrice());
		
		System.out.println("***********************************");
		
		Author author = context.getBean(Author.class);
		System.out.println(author.getName());
		System.out.println(author.getPenName());
		
		System.out.println("*********************");
		
		context.close();
	}

}
