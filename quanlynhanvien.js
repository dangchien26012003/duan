var data = [{
        MaNV: 01,
        TenNV: "hoa",
        NoiSinh: "Hà Nội",
        NoiO: "Hà Nội",
        SDT: "0374927483",
        DateIn: "2022-06-07",
        ViTri: "Kho",
        LuongHT: 10000000,
        NgayCong: 15,
        NgayNghi: 0,
        GhiChu: "",
    },
    {
        MaNV: 02,
        TenNV: "hoa",
        NoiSinh: "Hà Nội",
        NoiO: "Hà Nội",
        SDT: "0374927483",
        DateIn: "2022-06-07",
        ViTri: "Kho",
        LuongHT: 10000000,
        NgayCong: 15,
        NgayNghi: 0,
        GhiChu: "",
    },
    {
        MaNV: 03,
        TenNV: "hoa",
        NoiSinh: "Hà Nội",
        NoiO: "Hà Nội",
        SDT: "0374927483",
        DateIn: "2022-06-07",
        ViTri: "Kho",
        LuongHT: 10000000,
        NgayCong: 15,
        NgayNghi: 0,
        GhiChu: "",
    },
    {
        MaNV: 04,
        TenNV: "hoa",
        NoiSinh: "Hà Nội",
        NoiO: "Hà Nội",
        SDT: "0374927483",
        DateIn: "2022-06-07",
        ViTri: "Kho",
        LuongHT: 10000000,
        NgayCong: 15,
        NgayNghi: 0,
        GhiChu: "",
    },
    {
        MaNV: 05,
        TenNV: "hoa",
        NoiSinh: "Hà Nội",
        NoiO: "Hà Nội",
        SDT: "0374927483",
        DateIn: "2022-06-07",
        ViTri: "Kho",
        LuongHT: 10000000,
        NgayCong: 15,
        NgayNghi: 0,
        GhiChu: "",
    },
]

function luu() {
    ma = document.getElementById('themma').value;
    ten = document.getElementById('themten').value;
    noiSinh = document.getElementById('themnoio').value;
    noiO = document.getElementById('themnoisinh').value;
    sdt = document.getElementById('themsdt').value;
    ngayVao = document.getElementById('themngayvao').value;
    viTri = document.getElementById('themvitri').value;
    luongHT = document.getElementById('themluong').value;
    ngayCong = document.getElementById('themcong').value;
    ngayNghi = document.getElementById('themnghi').value;
    ghiChu = document.getElementById('themghichu').value;

    
    length = data.length
    if (ma == '') {
        ma = '0'
    }

    var item = {
        MaNV: ma,
        TenNV: ten,
        NoiSinh: noiSinh,
        NoiO: noiO,
        SDT: sdt,
        DateIn: ngayVao,
        ViTri: viTri,
        LuongHT: luongHT,
        NgayCong: ngayCong,
        NgayNghi: ngayNghi,
        GhiChu: ghiChu
    }

    for (var i = 0; i < length; i++) {
        if (ma == data[i].MaNV) {
            var check = confirm("Ma nhan vien da ton tai\nBan co muon thay the khong")
            if (check == true) {
                data.splice(i, 1, item)
            } else {
                return
            }
            render()
            return
        }
    }



    data.push(item)
    render()
}

function deleteValue() {
    document.getElementById('themma').value = ""
    document.getElementById('themten').value = ""
    document.getElementById('themnoio').value = ""
    document.getElementById('themnoisinh').value = ""
    document.getElementById('themsdt').value = ""
    document.getElementById('themngayvao').value = ""
    document.getElementById('themvitri').value = ""
    document.getElementById('themluong').value = ""
    document.getElementById('themcong').value = ""
    document.getElementById('themnghi').value = ""
    document.getElementById('themghichu').value = ""
}

function render() {
    table =
        `
    <tr>
    <th>STT</th>
    <th>Mã nhân viên</th>
    <th>Tên nhân viên</th>
    <th>Nơi sinh</th>
    <th>Nơi ở</th>
    <th>Số điện thoại</th>
    <th>Ngày vào</th>
    <th>Vị trí</th>
    <th>Lương hiện tại</th>
    <th>Ngày công</th>
    <th>Ngày nghỉ</th>
    <th>Ghi chú</th>
    <th>Hành động</th>
    </tr>
    `
    var length = data.length
    for (var i = 0; i < length; i++) {
        table +=
            `
        <tr>
            <td>${1+ i}</td>
            <td>${data[i].MaNV}</td>
            <td>${data[i].TenNV}</td>
            <td>${data[i].NoiSinh}</td>
            <td>${data[i].NoiO}</td>
            <td>${data[i].SDT}</td>
            <td>${data[i].DateIn}</td>
            <td>${data[i].ViTri}</td>
            <td>${data[i].LuongHT}</td>
            <td>${data[i].NgayCong}</td>
            <td>${data[i].NgayNghi}</td>
            <td>${data[i].GhiChu}</td>
            <td>
                <button onclick="deleteItem(${data[i].MaNV})" class="delete" style="background-color: rgb(66, 211, 46)">Delete</button>
                <button onclick="editItem(${data[i].MaNV})" class="edit" style="background-color: rgb(246, 249, 105)">Edit</button>
            </td>
        </tr>
        `
    }

    document.getElementById('listNV').innerHTML = table
    document.getElementById('timvitri').value = ''
    deleteValue()
}

render()

function timkiem() {

}

function editItem(x) {
    for (var i = 0; i < data.length; i++) {
        if (x == data[i].MaNV) {
            document.getElementById('themma').value = data[i].MaNV
            document.getElementById('themten').value = data[i].TenNV
            document.getElementById('themnoisinh').value = data[i].NoiSinh
            document.getElementById('themnoio').value = data[i].NoiO
            document.getElementById('themsdt').value = data[i].SDT
            document.getElementById('themngayvao').value = data[i].DateIn
            document.getElementById('themvitri').value = data[i].ViTri
            document.getElementById('themluong').value = data[i].LuongHT
            document.getElementById('themcong').value = data[i].NgayCong
            document.getElementById('themnghi').value = data[i].NgayNghi
            document.getElementById('themghichu').value = data[i].GhiChu
            return
        }
    }
}

function deleteItem(x) {
    for (var i = 0; i < data.length; i++) {
        if (x == data[i].MaNV) {
            check = confirm(`Bạn có muốn xoá nhân viên ${x} không`)
            if(check == true) {
                data.splice(i, 1)
                render()
            }
        }
    }
}


function look() {
    dataLook = []
    
    timMa = document.getElementById('timma').value
    timTen = document.getElementById('timten').value
    ngayLam = document.getElementById('timngaylam').value
    timLuong = document.getElementById('timluong').value
    timNgayNghi = document.getElementById('timgaynghi').value
    timViTri = document.getElementById('timvitri').value

    dataNameLook = [timMa, timTen, ngayLam, timLuong, timNgayNghi, timViTri,]
    dataVarLook = []
    for(i = 0 ; i < dataNameLook.length; i++) {
        if(dataNameLook[i] != ''){
            dataVarLook.push(dataNameLook[i])
        }
    }

    for(i = 0; i < data.length; i++) {
        if(timMa == data[i].MaNV || timTen == data[i].TenNV || ngayLam == data[i].NgayCong || timViTri == data[i].ViTri) {
            dataLook.push(data[i])
        }
    }

    table =
        `
    <tr>
    <th>STT</th>
    <th>Mã nhân viên</th>
    <th>Tên nhân viên</th>
    <th>Nơi sinh</th>
    <th>Nơi ở</th>
    <th>Số điện thoại</th>
    <th>Ngày vào</th>
    <th>Vị trí</th>
    <th>Lương hiện tại</th>
    <th>Ngày công</th>
    <th>Ngày nghỉ</th>
    <th>Ghi chú</th>
    <th>Hành động</th>
    </tr>
    `
    var length = dataLook.length
    for (var i = 0; i < length; i++) {
        table +=
            `
        <tr>
            <th>${1+ i}</th>
            <th>${dataLook[i].MaNV}</th>
            <th>${dataLook[i].TenNV}</th>
            <th>${dataLook[i].NoiSinh}</th>
            <th>${dataLook[i].NoiO}</th>
            <th>${dataLook[i].SDT}</th>
            <th>${dataLook[i].DateIn}</th>
            <th>${dataLook[i].ViTri}</th>
            <th>${dataLook[i].LuongHT}</th>
            <th>${dataLook[i].NgayCong}</th>
            <th>${dataLook[i].NgayNghi}</th>
            <th>${dataLook[i].GhiChu}</th>
            <td>
                <button onclick="deleteItem(${dataLook[i].MaNV})" class="delete" style="background-color: rgb(66, 211, 46)">Delete</button>
                <button onclick="editItem(${dataLook[i].MaNV})" class="edit" style="background-color: rgb(246, 249, 105)">Edit</button>
            </td>
        </tr>
        `
    }

    document.getElementById('timkiem').innerHTML = table

}


