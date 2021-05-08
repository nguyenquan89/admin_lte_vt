function openPopup(clickShowBtn, popupShow) {
    $('body').on('click',clickShowBtn,function(){
        $(popupShow).bPopup({
            speed: 450,
            transition: 'slideDown',
            zIndex:99999,
            onOpen: function() { 
                $(popupShow).css('visibility', 'visible'); 
            },
            onClose: function() { 
                $(popupShow).css('visibility', 'hidden'); 
            }
        });
    });
}
function closePopup(clickCloseBtn, popupClose) {
    $('body').on('click' ,clickCloseBtn,function() {
        $(popupClose).css('visibility', 'hidden');
        $(popupClose).bPopup().close();
    })
}
// Trình Editor
function addTinyMCE(selector_id, height) {
    if(height > 0) {
        height = height;
    }else {
        height = 200;
    }
    id = selector_id.replace('#','');
    tinymce.execCommand('mceRemoveEditor', false, id);
    tinymce.init({
        path_absolute : "/",
        selector:selector_id,
        branding: false,
        hidden_input: false,
        relative_urls: false,
        convert_urls: false,
        height : height,
        autosave_ask_before_unload:true,
        autosave_interval:'10s',
        autosave_restore_when_empty:true,
        entity_encoding : "raw",
        fontsize_formats: "8px 9px 10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 22px 24px 26px 28px 30px 32px 36px 40px 46px 52px 60px",
        // autosave
        plugins: [
            "textcolor toc",
            "advlist autolink lists link image imagetools charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste wordcount"
        ],
        wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g,
        language: ($('meta[name=language]').attr('content') == 'vi') ? 'vi_VN' : '',
        autosave_retention:"30m",
        autosave_prefix: "tinymce-autosave-{path}{query}-{id}-",
        wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g,
        toolbar: "undo redo | bold italic | table | sudomedia | styleselect | fontselect |  fontsizeselect " +
            "| forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent " +
            "indent | link unlink | fullscreen restoredraft | toc",
    });
}