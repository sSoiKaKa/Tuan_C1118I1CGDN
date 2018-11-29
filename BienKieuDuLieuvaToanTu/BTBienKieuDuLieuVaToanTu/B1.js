var Ly = parseInt(prompt("Nhap diem Vat Ly: "));
var Hoa = parseInt(prompt("Nhap diem Hoa Hoc: "));
var Sinh = parseInt(prompt("Nhap diem Sinh Hoc: "));
var tong = parseInt(Ly + Hoa + Sinh);
var dtb = tong / 3;
document.write("Tong la: " + tong);
document.write("<br/>");
document.write("Diem Trung Binh la: " + dtb);