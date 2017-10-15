//加入收藏: 兼容性不好，只能在IE下成功。

function AddFavorite(sURL, sTitle) {

    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("Add Favorite Failed. 加入收藏失败，手动在浏览器里进行设置。");
        }
    }
}

//设为首页

function SetHome(url) {

    if (document.all) {

        document.body.style.behavior = 'url(#default#homepage)';

        document.body.setHomePage(url);

    } else {

        alert("Set Home Failed. 设为首页失败，请手动在浏览器里设置。");

    }

}