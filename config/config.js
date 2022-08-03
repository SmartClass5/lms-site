require('dotenv').config();

module.exports = {
    // 사용API 및 공용 주소
    authurl:process.env.AUTH_URL,
    authed_use_url:process.env.AUTHED_USE_URL,
    base_crud_url:process.env.BASE_CRUD_URL,
    kube_client_url:process.env.KUBE_CLIENT_URL,
    lrn_record_url:process.env.LRN_RECORD_URL,
    cdn_url:process.env.CDN_URL,
}