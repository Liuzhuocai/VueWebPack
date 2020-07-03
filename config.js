import Vue from 'vue/dist/vue.runtime.esm';
// import XCodes from '@ul/xerror/codes';

// import messages from '@ul/xerror/messages.esm.js';

//产品级配置
const config = {
    APPID: 'DSJSFSD',
    BASE: '',
    APIBASE: '/jktb/sfsd',
    // PLATFORM: 'http://bigapp.scedu.net',
    // PLATFORM: 'http://test.scxk750.com/jydsj/v2',
    PLATFORM: '/web/portal.html',
    GET_USERINFO_URL: '/api/user/login'
};
//开发配置
/* IFDEBUG */
// config.APIBASE='http://bigapp.scedu.net/api';
// config.APIBASE='http://192.168.10.118:9988';
// config.APIBASE='http://192.168.10.141:9988'
// config.APIBASE='http://192.168.10.191:9987';
config.APIBASE = 'http://192.168.10.238:9984';
config.PLATFORM = 'http://192.168.10.117:3001';
//高校
// config.testToken = '0SFD3G6NIFTIJG;i1iTttsLYsc=,RYCoLf6N7wibl21uhclH7ijtvxFS0idCWal0lTht2-rfRwRlzr0B8Pz31cFMUq7xotroU5mYrYexS2dd7VkP2iRQvTLBWWsrzmIxtcKxGFi0VaqAvBZ28xlwEp13WGOuzqyz32_Bnb14Xl16JUfNI-dAdg_z8EVZxCUe3Nucq7JuAifFM7rQsVR_yS0jH-NpwvoFOIRXPuegj8HxZF5Kuu5GWA==;K0wNjfrbooxSrhcazSMjRHWft6kjvaBWf2_uE6PmF-o5aDEz0uRI4k0R09W7qkc8y1P-N0Dp9KQmg-txaCOUdw==';
//省厅
// config.testToken = '0SFD3G6NIFSRXZ;MMun--fHG5U=,g4gXYc8v05cIAjc_Si3UUFjrTnLg79QBo5aH5mRFAE1yzGupaGpNyqdv0fj0DpOtRC1UTYk5mPtL1pWZwpFxtEQCxz3rckGS8hwrI58bGAjVED5DesWlKDAn9-sZ3tvah5wFIJQw3nFC0ZjSqOWRPsoFNih82BkQDA0lYL6xJTROHw6g-vtj8lpkbTTnN-Qd_qVjlHH3_fXwWZutjXShHgsc;Ww3htwO0k3aj8gF4IqC0Yi91zZhdBy6Ml1TepeAIZYl0QRMTw7zaNYQAou5OHPTrCmj-4ttaLK9YhwED3sjVMg==';
//市州
config.testToken = '0SFDGE2YEFU3QR;bUszneOwDYk=,wnsQsYEohCAYbCPhFw8x4vjo75Lw7_LZ8rjboxKYNxXLXPiF3MIzdqK0k58rhpM5jGGqa08bZ1QADQDuJ6UO7AVA9uYA6FIvcLVKrFsiQNvDY49yJwXmqGud__cXj3pMbWSSYAOLERkXYL1VIiNBZA9GAVX2yg4yKHZp5pXZheYqTfrrax4sQWfoRF4Dj3kq3uwvZEudmEIgSigL0SoW_hd120-mooLbO1djZIRBfuUI0Ck3kv8NAHlO9XpjXsDvLrnJzLeI3TGVsiuR-hdkxXUKhC3kXFUBICD_eIWpJCRNLl-ClFhrPW-JCr8HwJ4=;gKHA-p9z_JVYeu_1BrjzjMS8YcLA1wI5_TXgEUelizuSmiokzBa127ENuwg0-MkhsrqBfSrlaF3TIR1CEjTuJg==';
//区县
// config.testToken = '0SFD3G6NIFSV2C;fk8fnfSnfxw=,li8NbZHIy_M0TbKiRJUUkoK9Jc_HR65DgJ_HTKLm16cY9Elhs6FxlIBFNNjmVjYBVcvc0ejoEBmzB4qobWAXxzpN5AHmH0c-FakEQI_iQdWtMp3CZGEjURfmlJ70EjJgKcpUBBpN84yJQRkH_RDOT311-6VBA4gvppL3EORasU3tjHrKEOqEEz_2fYPDzu2eFxkHxwbkj-DOHIBsOB1UpMbW;ZgIbMq6YXXB6ejslwcrdmwi8H3alAnk0HTKm3PjMv2JgdVGIv9gkqcnZd5n6eBuYaXfE7EUiYck88kY7X2gjdw==';
// config.APIBASE='http://test.scxk750.com/jydsj/'
/* FIDEBUG */


//注册配置;
Vue.prototype.$CONFIG = config;
// Vue.prototype.$XCODES = XCodes;
// Vue.prototype.$MESSAGE = messages;


