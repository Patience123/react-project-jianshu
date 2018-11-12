import { createGlobalStyle  } from 'styled-components';

const GlobalIconFont = createGlobalStyle`
   @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1542020909744'); /* IE9*/
        src: url('./iconfont.eot?t=1542020909744#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAb0AAsAAAAACgwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8dkpeY21hcAAAAYAAAAB4AAAB1k5zhfxnbHlmAAAB+AAAAtAAAANcOFIN+mhlYWQAAATIAAAALgAAADYTPkRXaGhlYQAABPgAAAAeAAAAJAfeBEVobXR4AAAFGAAAABIAAAAcHL0AAGxvY2EAAAUsAAAAEAAAABACUAMubWF4cAAABTwAAAAfAAAAIAEZAEtuYW1lAAAFXAAAAUUAAAJtPlT+fXBvc3QAAAakAAAAUAAAAGe+NnRSeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkkWacwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMbwIZG7438AQw9zA0AAUZgTJAQDsEQxReJztkcsNwyAQRB8soMhCqSRXd5GLbyklp5S7chf2fqykiQx6wIxASAzQATEeRoPyoeB6W1oiF5bIG0/zkxuVpqho13XfjgPM1Z/7qtjpyT0GDLvXLWv+Xhn8NWN+XW74Pyaxrwm+SuJt6YW3o2vize1bgpxLyh04eJxVUt1P01AUP/d2axnso2XrOjvWrRtrAWXAPrqN4dgAARdDolEfIMFoDMYHHiCamBjJDEZZTBSfeCHxI/FlEfRBZuIHTxAe1MQQY0x8Mib+BTyy6m0ZMfY255zfOT33/O7vFjDAn2XqDn4AHAQArGoepWNIdSJGQkJcSwtRgkiOICeiFrfkKLLUlio1i6VWyV3t2tZn51coamV+zrDD210z/ZUaRdUqxKrtWy8PK3PzKwAWIA91G78CBpzQB3mAtDvhjqgRxp1QFZVmkBNFwkoqSQZq6VRSVSJhmiHjE3EJBZDHK0SMr5yY93jjeZS6+O7ETinzKTX+PCG02FoxLxUj2lAwpZ0Ms95YZ2dzznFqLD3IMfZ8MyMXoxKrFJNiP75ev7+5ifD66fjxnH5LDo/lOo6Hm+wuT4/b355oLg0fG8pfmc2IwmfOznAhXlYjuQyAoVWZIgtYkAEMiXgiVIoRUoRwUukxIWFJFDQyPN6fjPVSG0vl8mbdOrJv2sJBCn+YjF0rLm1QhXK5YK1vTj1bbPjCYQGQqdca3oEWMo1sbV6FoFmoNfT0x/fH2La3MIncaPfM9vrr1Zknl5fvTRgtTWbfQ/wNXIRpG7nXLjgKGRgAiMqEGpfUEnLcy3MeGkU8EjKkjCGidAMkCXAi63+IHDNBnaufF4NBEVeJ1R9lXX7J70Kh3tCLjEskIcGiC0PW9GZG/1WtriJJRDtGn54VJdTGGjXWFwr5zCgossT/C/Wvc1VC/+Dse/gn5AhQVIVmNJoxDRGC9ghEX/LSwMgpWUubSGh4teEZ8hNp1Fu3r2O6qynDz0/h7iPdo14Pl7sxfraa29U/3kUD+u8mmm3j3K3c6GjpZp+DDvCO7KVwCxWQWYeCv9gQ3er1W2mp5HPy0Umt90KsuDA4Nk3P6u/f2C0MF+XcDMJ2x0i/K4xsTHAiwymU5GRjfwEPC68OeJxjYGRgYABiNuOi+/H8Nl8ZuFkYQOAGf4Mugv7fwMLA3ADkcjAwgUQB8v0IcwAAeJxjYGRgYG7438AQw7KXAQhYGBgYGVABOwBZggMtAAB4nGNhYGBgwYb3MjAAAAQTANoAAAAAAAAANgCWAM4A6gFMAa54nGNgZGBgYGewZ+BgAAEmIOYCQgaG/2A+AwAP5gFlAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nG3H0QqAIAwF0M20wqB/vCDNFc0gBOvrC3rtvB1y9In0b2DHHXsO3PPAI8UFJgmrmjjAn4faDG1qrcLuXEymVDVXbO8lXHVHIXoAKk4TrQ==') format('woff'),
        url('./iconfont.ttf?t=1542020909744') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1542020909744#iconfont') format('svg'); /* iOS 4.1- */
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
