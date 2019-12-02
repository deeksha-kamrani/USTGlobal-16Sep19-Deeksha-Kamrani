<%@page import="com.ustglobal.shoppingwebapp.beans.Retailer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%
	Retailer bean = (Retailer) session.getAttribute("bean");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<a href="./updatepassword">Update Password</a>
	<a href="./logout" style="float: right;">LogOut</a>
	<h2>
		Welcome
		<%=bean.getName()%></h2>
	<fieldset>
		<legend>Search Product</legend>
		<form action="./search">
			<table>
				<tr>
					<td>ID:</td>
					<td><input type="number" name="id"></td>
					<td><input type="submit" value="Search"></td>
				</tr>
			</table>
		</form>
	</fieldset>
	<%
		Retailer retailer = (Retailer) request.getAttribute("bean");
	%>

	<%
		if (retailer != null) {
	%>

	<table>
		<tr>
		    
			<th>Name</th>
			<th>Email</th>
			<th>Password</th>
			
		</tr>
		<tr>
			
			<th><%=retailer.getName()%></th>
			<th><%=retailer.getEmail()%></th>
			<th><%=retailer.getPassword()%></th>
			

		</tr>
	</table>

	<%
		}
	%>
	<h3>${msg}</h3>
</body>
</html>