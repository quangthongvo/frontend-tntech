
document.addEventListener("DOMContentLoaded", function () {      //( addEventListener:gắn trình xửa lý sự kiện vào tài liệu)chờ đợi toàn bộ nội dung HTLM tải xong rồi mới chạy javascrip bên trong

    //Tạo các biến để truy cập (getElementById: trả về 1 phần tử có giá trị được chỉ định ) và thao tác với các phần tử HTML
    const collapseMenu = document.getElementById("navbarSupportedContent");     
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");
    const langToggle = document.getElementById("langToggle");

    // Khi Menu điều hướng ở ra ở chế độ mobile
    collapseMenu.addEventListener("shown.bs.collapse", function () {     
        iconOpen.style.display = "none";                                 
        iconClose.style.display = "inline-block";                        
        if (langToggle) langToggle.style.display = "none";               
    });

    // Khi Menu điều hướng đóng chế độ mobile
    collapseMenu.addEventListener("hidden.bs.collapse", function () {    
        iconOpen.style.display = "inline-block";                         
        iconClose.style.display = "none";                                
        if (langToggle) langToggle.style.display = "flex";               
    });

    // Khi resize thay đổi kích thước cửa sổ trình duyệt khi kích thước lớn hơn 768px thì nó sẽ quay lại desktop
    window.addEventListener("resize", function () {                      
        if (window.innerWidth > 768) {                                
            iconOpen.style.display = "inline-block";                     
            iconClose.style.display = "none";                           
            if (langToggle) langToggle.style.display = "flex";           
        }
    });

    //track là phần tử html có id:carouselTrack thường chứa các slide, item
    const track = document.getElementById("carouselTrack");              // tìm phần tử HTML có id: carousleTrack trong trang, track là 1 đối tượng DOM đại diện cho id:....
    
    
    // item là một mảng chứa tất cả các phần tử con trực tiếp bên trong track thường là các slide hoặc ảnh trong carousel.
    const items = Array.from(track.children);                            // trả về 1 HTLMcollection chứa các phần tử con trực tiếp bên trong track (aray.from()biến danh sách con thành mảng để dễ thao tác)item là 1 mảng chứa các phần tử con ben trong



    // Xử lý sự kiện khi người dùng click vào nút (Prev) trong 1 carousel
    document.getElementById("prevBtn").addEventListener("click", () => {
        items.unshift(items.pop()); 
        updateCarousel();
    });

    // Xử lý sự kiện khi người dùng click vào nút (Next) trong 1 carousel
    document.getElementById("nextBtn").addEventListener("click", () => {
        items.push(items.shift()); 

        updateCarousel();
    });


    //Cầu nối giữa dữ liệu (mảng item) và giao diện người dùng (DOM)
    function updateCarousel() {
        // Xoá nội dung cũ đi vì khi bạn cập nhật nội dung thì các slide vẫn còn trong DOM nên phải xoá để ko bị trùng lặp
        track.innerHTML = "";
        // Lặp qua mảng item chứa tất cả các phần tử slide, mỗi phần tử sẽ được gán class tương ứng theo vị trí(index)
        items.forEach((item, index) => {
            item.classList.remove("center", "side", "left", "right", "active");
            if (index === 0) {
                item.classList.add("carousel-image", "side", "left");
            } else if (index === 1) {
                item.classList.add("carousel-image", "center", "active");
            } else if (index === 2) {
                item.classList.add("carousel-image", "side", "right");
            } else {
                item.classList.add("carousel-image");
            }
            //
            track.appendChild(item);
        });
    }

    updateCarousel(); // Cập nhật lại giao diện của carousle sau mỗi lần chuyển ảnh
});


//Tìm tất cả các phần tử của HTML có class(box-scale) để trả về 1 nodelist chứa các div,section,tag chứa class: box-scale
const boxes = document.querySelectorAll('.box-scale');

boxes.forEach(box => {       //Duyệt qua các box trong boxes vừa lấy được, với mỗi box-scale se gắn 1 sự kiện'mouneenter' khi người dùng di chuột(hover) vào 1 box,hàm callback bên trong sẽ được gọi 
    box.addEventListener('mouseenter', () => {
        document.querySelector('.box-scale.active')?.classList.remove('active');
        box.classList.add('active'); //gán class active cho box mà chuột đang di vào
    });
});


