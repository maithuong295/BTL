var slideIndex = 1;
showDivs(slideIndex); // nút chuyển ảnh

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// tự động chạy
var myIndex = 0;
carousel(); 

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

function sbt() {
  document.getElementById("myForm").submit();
}

function dropDown(list) {
  var x = document.getElementById(list);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }a
}

//phần mua
function change(inputID) {
  let results = Array.from(document.querySelectorAll('#sp > div'));
  $('input[type="checkbox"]').not("#"+inputID).prop("checked", false);
  // ẩn tất cả kết quả
  results.forEach(function(result) {
    result.style.display = 'none';
  });
  // Lọc kết quả chỉ những kết quả đáp ứng TẤT CẢ các yêu cầu:
  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });
  // Hiển thị các kết quả được lọc đó:
  results.forEach(function(result) {
    result.style.display = 'block';
  });
}
//Ban đầu chạy chức năng thay đổi để áp dụng bất kỳ bộ lọc ban đầu nào
change();


function searchDisplay(idsearch){
  document.getElementById("searchbar").style.display="block";
  document.getElementById(idsearch).style.display="none";
  document.getElementById("close-btn").style.display="block";
}
//thay đổi tahnh tìm kiếm từ kính lúp thành thanh tìm kiếm
function searchClose(idsearch){
  document.getElementById("searchbar").style.display="none";
  document.getElementById(idsearch).style.display="none";
  document.getElementById("search-btn").style.display="block";
  document.getElementById("myUL").style.display="none";

}

function increaseQuantity() {
  let quantityInput = document.querySelector('input[name="quantity"]');
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
}

function decreaseQuantity() {
  let quantityInput = document.querySelector('input[name="quantity"]');
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
  }
}

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";

}
//thay ảnh (chi tiết)
  function changeImage(linkimg)
  {
      
  var img = document.getElementById("img1");
  img.src=""+linkimg+"";
  return false;
  }

  // thay đổi kích cỡ
  function drops() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  //thay đổi thuộc tính
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }

  function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    
    // Kiểm tra nếu input trống
    if (input.value.trim() === "") {
        ul.style.display = "none"; // Ẩn danh sách
        return; // Thoát hàm
    } else {
        ul.style.display = "block"; // Hiển thị danh sách
    }

    // Lọc các phần tử trong danh sách
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Hiển thị phần tử phù hợp
        } else {
            li[i].style.display = "none"; // Ẩn phần tử không phù hợp
        }
    }
}