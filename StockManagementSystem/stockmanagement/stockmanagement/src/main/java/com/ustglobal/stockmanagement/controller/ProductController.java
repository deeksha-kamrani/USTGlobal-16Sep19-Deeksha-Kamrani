package com.ustglobal.stockmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.stockmanagement.dto.CartBean;
import com.ustglobal.stockmanagement.dto.ProductBean;
import com.ustglobal.stockmanagement.response.ProductResponse;
import com.ustglobal.stockmanagement.service.CartService;
import com.ustglobal.stockmanagement.service.ProductService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*",allowCredentials = "true")
public class ProductController {

	@Autowired
	private ProductService service;
	
	@Autowired
	private CartService cartService;

	                  // addProduct //

	@PostMapping(path = "/addProduct", 
			consumes = {MediaType.APPLICATION_JSON_VALUE },
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse addProduct(@RequestBody ProductBean productBean) {
		ProductResponse productResponse = new ProductResponse();
		String productName = productBean.getProductName();
		if (!service.checkProductName(productName)) {
			ProductBean productBean1 = service.addProduct(productBean);
			if (productBean1 != null) {
				productResponse.setStatusCode(410);
				productResponse.setMessage("success");
				productResponse.setDescription(productBean1.getProductName() + "added successfully");
			} else {
				productResponse.setStatusCode(510);
				productResponse.setMessage("fail");
				productResponse.setDescription("Product Not Added.. Please Try Again");
			}
			return productResponse;
		} else {
			productResponse.setStatusCode(610);
			productResponse.setMessage("fail");
			productResponse.setDescription("This Product is present.. please update that product quantity ");

			return productResponse;
		}
	}// End of addProduct()


	                   // update Product //

	@PutMapping (path = "/updateProduct",
			consumes = { MediaType.APPLICATION_JSON_VALUE },
			produces =  MediaType.APPLICATION_JSON_VALUE )
	public ProductResponse updateProduct (@RequestBody ProductBean productBean) {
		ProductBean bean = service.updateProduct(productBean);
		ProductResponse response = new ProductResponse();
		if (bean != null) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription(bean.getProductName() + "Updated Successfully");
		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Product Not Updated");
		}
		return response;

	}// end of updateProduct


	                 // delete Product //

	@DeleteMapping (path = "/deleteProduct/{productId}",
			produces = MediaType.APPLICATION_JSON_VALUE )
	public ProductResponse deleteProduct(@PathVariable int productId) {
		boolean isDeleted = service.deleteProduct(productId);
		ProductResponse response = new ProductResponse();
		if(isDeleted) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("product Deleted successfully");
		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Product Not Deleted..Please Try Again ");
		}
		return response;
	}// end of deleteProduct()

	                   // productList //

	@GetMapping(path = "/productList",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public ProductResponse getAllProduct() {
		List<ProductBean> productList = service.getAllProduct();
		ProductResponse response = new ProductResponse();
		if (productList != null && !productList.isEmpty()) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("List of Poducts");
			response.setProductBeanList(productList);

		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Products Not Found");
		}
		return response;
	}// end of getAllProduct()

	                     // productList by name//

	@GetMapping(path = "/productListByName/{productName}",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public ProductResponse getProductByName(@PathVariable String productName) {
		List<ProductBean> pList = service.getProductByName(productName);
		ProductResponse response = new ProductResponse();
		if (pList != null && !pList.isEmpty()) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("List of Poducts");
			response.setProductBeanList(pList);

		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Products Not Found");
		}
		return response;
	}// end of getProductByName()

	                     // getProductById //

	@GetMapping(path = "/productListById/{productId}",
			produces = { MediaType.APPLICATION_JSON_VALUE})
	public ProductResponse getProductById(@PathVariable int productId) {
		List<ProductBean> iList = service.getProductById(productId);
		ProductResponse response = new ProductResponse();
		if (iList != null && !iList.isEmpty()) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("List of Poducts");
			response.setProductBeanList(iList);

		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Products Not Found");
		}
		return response;
	}// end of getProductById()

	                // productList by company//

	@GetMapping(path = "/productListByCompany/{productCompany}",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public ProductResponse getProductByCompany(@PathVariable String productCompany) {
		List<ProductBean> cList = service.getProductByCompany(productCompany);
		ProductResponse response = new ProductResponse();
		if (cList != null && !cList.isEmpty()) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("List of Poducts");
			response.setProductBeanList(cList);

		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Products Not Found");
		}
		return response;
	}// end of getProductByCompany()

	                  // productList by category//

	@GetMapping(path = "/productListByCategory/{productCategory}",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public ProductResponse getProductByCategory(@PathVariable String productCategory) {
		List<ProductBean> ctList = service.getProductByCategory(productCategory);
		ProductResponse response = new ProductResponse();
		if (ctList != null && !ctList.isEmpty()) {
			response.setStatusCode(410);
			response.setMessage("success");
			response.setDescription("List of Poducts");
			response.setProductBeanList(ctList);

		} else {
			response.setStatusCode(510);
			response.setMessage("fail");
			response.setDescription("Products Not Found");
		}
		return response;
	}// end of getProductByCategory()
	
	@PostMapping(path = "/addProductToCart", consumes = { 
			MediaType.APPLICATION_JSON_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse addProductToCart(@RequestBody CartBean cartBean) {

		int quantity = cartBean.getProductQuantity();
		ProductResponse productResponse = new ProductResponse();

		CartBean cartBean1 = cartService.addProductToCart(cartBean);

		if (cartBean1 != null) {
			productResponse.setStatusCode(410);
			productResponse.setMessage("success");
			productResponse.setDescription("product added to cart successfully");

		} else {
			productResponse.setStatusCode(530);
			productResponse.setMessage("fail");
			productResponse.setDescription("product not added.. please try agian");
		}
		return productResponse;
}
	
}
