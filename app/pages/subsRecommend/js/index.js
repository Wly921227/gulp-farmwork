const config = {
    'हिन्दी': {
        id: 'AAAAEttyHGk',
        name: 'मजेदार टुड',
        head: 'https://pfkcdn.meiduoyun.com/9f06/83835c69b0b20dba098cdc4ff342AAAAEttyHGk.jpeg',
        desc: 'भारत की दैनिक मजेदार बातें!',
    },
    'தமிழ் மொழி': {
        id: 'AAAAEttyHGs',
        name: 'குரல் படம்',
        head: 'https://pfkcdn.meiduoyun.com/9d4c/fc0ee523f95e9ecf63c2dab80a60AAAAEttyHGs.jpeg',
        desc: 'இங்கே பல குரல் கதை மற்றும் சிறந்த படம்!',
    },
    'മലയാളം': {
        id: 'AAAAEttyHGo',
        name: 'രസകരം',
        head: 'https://pfkcdn.meiduoyun.com/7c94/4cd27134c5cc6ad297bf26e329acAAAAEttyHGo.jpeg',
        desc: '～～നിങ്ങൾ ഇഷ്ടപ്പെടുന്ന ദിവസമായ തമാശയുണ്ട്～～',
    },
}

let data = {}
const ua = navigator.userAgent.toLowerCase()
const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1

function setFontSize(planSize = 750, grid = 20, time = 0) {
    console.log('window.innerWidth', window.innerWidth)
    if (window.innerWidth > 450 && time <= 4) {
        setTimeout(() => {
            time++
            setFontSize(planSize, grid, time)
        }, 500)
    } else {
        const defaultWidth = planSize || 750                           // 设计图宽度
        const itemSize = grid ? (grid * 2) : (24 * 2)                  // 期望1rem=设计图每个格子 * 2px (避免字体出现小于12px，所以*2)
        const width = window.innerWidth >= 750 ? 750 : window.innerWidth
        const oneRem = width / (defaultWidth / itemSize)               // 屏幕1rem=Xpx
        console.log('1rem = ' + oneRem * 2 + 'px')
        const fontSize = oneRem / 16 * 100
        document.querySelector('html').style.fontSize = fontSize + '%'
    }
}

function initSubsList() {
    const list = Object.keys(config)
    const $list = $('.subs-list ul')
    let html = ''
    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        html += `<li class="sub-item" data-item="${item}">
                    ${item}
                </li>`
    }
    $list.html(html)
    $list.on('click', '.sub-item', e => {
        e.preventDefault()
        const $this = $(e.target)
        $list.find('.sub-item').removeClass('active')
        $this.addClass('active')
    })
}

function changePage(page) {
    const $this = $(`section.page-${page}`)
    const $section = $('section')
    $section.css('display', 'none')
    $section.css('z-index', -1)
    $this.css('display', 'inline-block')
    $this.css('z-index', 1)
    $('.page-follow .action .btn').fadeOut()
}

function initEvent() {
    $('.page-list .next').on('click', e => {
        e.preventDefault()
        const $active = $('.page-list .subs-list .active')
        if ($active.length) {
            const loc = $active.data('item')
            data = config[loc]
            console.log(data)
            YC.loading()
            YC.follow({
                account: data.id,
                success() {
                    console.log('follow success')
                    // setTimeout(() => {
                        YC.hideLoading()
                        openSubsPage()
                    // }, 5000)
                },
                error() {
                    console.log('follow error')
                    alert('关注失败，请稍后重试')
                }
            })
        } else {
            return false
        }
    })
    // TODO
    $('.page-list .open').on('click', e => {
        e.preventDefault()
        const $active = $('.page-list .subs-list .active')
        if ($active.length) {
            const loc = $active.data('item')
            data = config[loc]
            openSubsPage()
        } else {
            return false
        }
    })
    // $('.page-follow .back .btn').on('click', e => {
    //     e.preventDefault()
    //     changePage('list')
    // })
    // $('.page-follow .follow').on('click', e => {
    //     e.preventDefault()
    //     if (isAndroid) {
    //         cordova.exec(function () {
    //             console.log('follow success')
    //             openSubsPage()
    //         }, function () {
    //             console.log('follow error')
    //             alert('关注失败，请稍后重试')
    //         }, 'YCJSBridge', 'follow', ['yeecall.com', data.id])
    //     } else {
    //         YC.follow(data.id)
    //     }
    // })
    // $('.page-follow .open').on('click', e => {
    //     e.preventDefault()
    //     openSubsPage()
    // })
}

function openSubsPage() {
    const openSubs = `yeecall://ui/userprofile?hid=${data.id}`
    YC.openYeeCallUI({
        link: openSubs,
        success: function () {
        },
        error: function () {
        }
    })
}

function modifyJsBridgeCallback() {
    if (/android/.test(navigator.userAgent.toLowerCase())) {
    } else {
        if (YC.jsBridgeCallback && typeof YC.jsBridgeCallback === 'function') {
            const callback = YC.jsBridgeCallback
            YC.jsBridgeCallback = function (name, status) {
                if (name === 'isFollow') {
                    if (status === 1) {
                        console.log('is follow')
                        $('.page-follow .open').fadeIn()
                    } else if (status === 0) {
                        console.log('not follow')
                        $('.page-follow .follow').fadeIn()
                    }
                } else if (name === 'follow') {
                    YC.hideLoading()
                    if (status === 1) {
                        console.log('follow success')
                        openSubsPage()
                    } else {
                        console.log('follow error')
                        alert('关注失败，请稍后重试')
                    }
                } else {
                    callback(name, status)
                }
            }
        }
    }
}

$(document).ready(() => {
    setFontSize()
    initEvent()
    initSubsList()
    document.addEventListener('deviceready', function () {
        YC.hideNav(true)
        YC.hideMenu(true)
        if (!isAndroid) {
            modifyJsBridgeCallback()
        }
    })
})