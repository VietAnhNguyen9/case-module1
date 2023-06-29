class Product{
    name
    price
    quantity
    constructor(img, name, price, quantity) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

}

let p1 = new Product("img/chamsocda2.webp" ,"Kem trị mụn", "230.000 đ", "Số lượng:100")
let p2 = new Product( "img/chamsocda4.webp","Nước hoa hồng", "210.000 đ", "Số lượng:100")
let p3 = new Product(  "img/nuochoa1.webp","Scandal", "1.290.000 đ", "Số lượng:20")
let p4 = new Product( "img/nuochoa3.webp","Coco Chanel", "4.110.000 đ", "Số lượng:20")
let p5 = new Product( "img/nuochoa5.webp","Versace Eros", "1.290.000 đ", "Số lượng:25")
let p6 = new Product( "img/phukien1.webp","Túi đựng mỹ phẩm", "290.000 đ", "Số lượng:200")
let p7 = new Product( "img/chamsoctoc4.webp","Dầu gội Tsubaki","290.000 đ","Số lượng:100")
let p8 = new Product( "img/chamsoctoanthan1.webp","Sữa dưỡng thể","230.000 đ","Số lượng:200")
let p9 = new Product( "img/chamsoctoanthan2.webp","Tẩy da chết Cocoon","190.000","Số lượng:300")
let p10 = new Product( "img/phukien5.webp","Nhíp","50.000 đ","Số lượng:500")
let total = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

function show(){
    let string = ""
    for (let i=0;i<total.length;i++){
        string += `<div style="width: 300px; margin: 10px;padding:12px 15px"  ><img src=" ${total[i].img}" STYLE="height: 180px; width: 180px;">`
        string += "<p>"+total[i].name+"</p>"
        string += "<p>"+total[i].price+"</p>"
        string += "<p>"+total[i].quantity+"</p>"
        string += "<button onclick='editProduct("+i+")'>Edit</button>" +
            "<button onclick='deleteProduct("+i+")'>Delete</button></div>"
    }
    document.getElementById("show").innerHTML=string;
}
show();
function addProduct(){
    let newImg = document.getElementById("newImg").value;
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newQuantity = document.getElementById("newQuantity").value;
    let p = new Product(newImg,newName,newPrice,newQuantity);
    total.push(p);
    alert("Thêm sản phẩm thành công");
    show();
}
let index1;
function editProduct(index){
    index1=index;
    document.getElementById("img").value = total[index].img
    document.getElementById("name").value = total[index].name
    document.getElementById("price").value = total[index].price
    document.getElementById("count").value = total[index].quantity

}
function editProduct1(){
     let img= document.getElementById("img").value
     let  name = document.getElementById("name").value
     let price= document.getElementById("price").value
     let quantity =  document.getElementById("count").value
    total[index1].img =img;
    total[index1].name =name;
    total[index1].price = price;
    total[index1].quantity =quantity;
    alert("Thay đổi thành công !")
    show()

}
function deleteProduct(index){
    if (confirm("Bạn có thực sự muốn xoá sản phẩm này không ?")) {
    total.splice(index,1);
    show();
    alert("Xóa thành công");
}}
// ----------------------------------------------------------------------------------------------------------

