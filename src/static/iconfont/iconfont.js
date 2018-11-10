import { createGlobalStyle  } from 'styled-components';

const GlobalIconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1541853967700'); /* IE9*/
    src: url('./iconfont.eot?t=1541853967700#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAW0AAsAAAAACDAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8dkgmY21hcAAAAYAAAABbAAABnLNIGj1nbHlmAAAB3AAAAdEAAAHwtRyyn2hlYWQAAAOwAAAALwAAADYTOSuMaGhlYQAAA+AAAAAeAAAAJAfeBEJobXR4AAAEAAAAABAAAAAQEL0AAGxvY2EAAAQQAAAACgAAAAoBLgCWbWF4cAAABBwAAAAeAAAAIAESAEtuYW1lAAAEPAAAAUUAAAJtPlT+fXBvc3QAAAWEAAAAMAAAAEEJqMW2eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk0WecwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMTxjZW7438AQw9zA0AAUZgTJAQDswQwXeJztkLENgDAMBM9OgiLEKJSIgaiYPGsE50PBELx1lv2yXDxQgBTsQQa7MYaucE1+YpWfOWOvUQ6N5q30/p0k00XVVx8fbOHXpn68WxqpTTT7RLmWCfYATBwRRgB4nGNgYmD4P4G5hamPQZBBloGBVd2O0VyPUZ2PkV2OUdzIzFxcFcgDigF5fIzMzUcUVRlZtnV0bmNh2dZpnal19F9u0XRm5ulFhSDS+ahWmlXnNmbmbZ1AUl3lyHqYTGHRdAYGFgYgYG5k2sDAzsDHYMhgx8BgLmwsrKyuzC5srK6mzsbOyMeorKRmagK00Mzc1ERdTVmJjR1ovbGRHKMso4iYuDJIFR+TqIiYkR2jaeJu1+NeFmdMPZYai3NzCjGJyjkqmznJm5p5KgmI6Wlqclnz+rib2wuy89hxsSs6qsoJqDmaSFkxlf7t3rePkWldoJGt9b9aRSV3aw1bJQ4efhF9YWkVYy4vZx0nu/RcCynxs4I87IIKoorqytYWDAyMYPd/YXrIYA3kqKmrsbGbsbGDCWB4sYmIA50NRGwM7IqmimbmYJ44lFaH0uxAj5kx7xKW0IjT4rAQLYpm0pXUdRMTEbSu8AhZZX3p3+k2Rpt/zzjYBGQEhYUE3dy8qg152WRFeS2TlLiZZRUFeNWYLnAysgmJSbOyyXlJ8ImqRpkZxOs51tm7x7Hl/tuznYeFXVBVUJidkYmH18WKX4mRk13ez0JQjVmOT0APACyGYdkAAAB4nGNgZGBgAOJjOctL4/ltvjJwszCAwA2eL/wI+v8EFgamh0AuBwMTSBQAK7QKTQB4nGNgZGBgbvjfwBDDspcBCFgYGBgZUAELAFl/AyoAAAQAAAAEAAAABAAAAAS9AAAAAAAAADYAlgD4AAB4nGNgZGBgYGGwB2IQYAJiLiBkYPgP5jMAAA85AV4AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYErLTEvPSUxKzMvnSkxkbWyNDcxn4EBAFsJByo=') format('woff'),
    url('./iconfont.ttf?t=1541853967700') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541853967700#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalIconFont;
