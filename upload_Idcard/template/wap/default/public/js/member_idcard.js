$(function(){
    getIdCardImg();
});

function getIdCardImg(){
    api("System.Member.idCard", {}, function (res){
        $idcard_info = res.data;
        console.log($idcard_info);
        $idcard_info = $idcard_info[0];
        var listhtml = '';

        //list_html += '';
        listhtml += '<div class="frontIdCard">';
        if($idcard_info.idcard_front != null){
            listhtml += '<img src="'+ROOT+'/template/wap/default/public/img/id_card/'+$idcard_info.idcard_front+'" class="idcard-img">';
            console.log(listhtml);
        }
        listhtml += '<form action="save" method="post" enctype="multipart/form-data">';
        listhtml += '身份证正面：<input type="file" name="image_front" /> <br></br>';
        listhtml += '<button type="submit" id="submitImg">提交</button>';
        listhtml += '</form>';
        listhtml += '</div>';

        
        listhtml += '<div class="backIdCard">';
        if($idcard_info.idcard_back != null){
            listhtml += '<img src="'+ROOT+'/template/wap/default/public/img/id_card/'+$idcard_info.idcard_back+'" class="idcard-img">';
        }
        listhtml += '<form action="save" method="post" enctype="multipart/form-data">';
        listhtml += '身份证反面：<input type="file" name="image_back" /> <br><br>';
        listhtml += '<button type="submit">提交</button><br><br>';
        listhtml += '</form>';
        listhtml += '</div>';
        $('.com-content').html(listhtml);
    })
}