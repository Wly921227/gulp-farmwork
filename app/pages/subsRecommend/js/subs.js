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

function initEvent() {
    $('.action .btn.follow').on('click', e => {
        e.preventDefault()
        const subsId = 'AAAAEtm3myE'
        window.YC.loading()
        window.YC.follow({
            account: subsId,
            success() {
                window.YC.hideLoading()
                console.log('follow success')
                openSubsPage(subsId)
            },
            error() {
                window.YC.hideLoading()
                console.log('follow error')
            }
        })
    })
}

function openSubsPage(subId) {
    const openSubs = `yeecall://ui/userprofile?hid=${subId}`
    window.YC.openYeeCallUI({
        link: openSubs,
        success: function () {
        },
        error: function () {
        }
    })
}

$(document).ready(() => {
    setFontSize()
    initEvent()

    document.addEventListener('deviceready', function () {
        window.YC.hideNav(true)
        window.YC.hideMenu(true)
    })
})