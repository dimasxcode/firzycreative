(function () {
    async function updateYoutubeAPI() {
        try {
            const response = await fetch('includes/youtube-api.php');
            const data = await response.json();

            // GET: thumbnail
            const thumbImg = document.querySelector('#latest-thumb');
            if (thumbImg && data.latest_thumbnail) {
                thumbImg.src = data.latest_thumbnail;
            } else {
                thumbImg.alt = data.video_title;
                console.log("Elemen #latest-thumb tidak ditemukan!")
            }

            // GET: video title
            const titleVideo = document.querySelector('#title-thumbnail');
            if (titleVideo && data.video_title) {
                titleVideo.textContent = data.video_title;
            } else {
                console.log("Elemen #title-thumbnail tidak ditemukan!");
            }

            // FEAT: formatting views count
            function formatViews(views) {
                views = parseInt(views);
                if (views >=1000000) {
                    return (views / 1000000).toFixed(1) + 'jt× ditonton';
                } else if (views >= 1000) {
                    return (views / 1000).toFixed(1) + 'rb× ditonton';
                } else {
                    return views + '× ditonton';
                }
            }
            // GET: video views count
            let countViews = document.querySelector('#views-count');
            if (countViews && data.total_views) {
                countViews.textContent = formatViews(data.total_views);
            } else {
                console.log("Elemen #views-count tidak ditemukan");
            }

            // GET: link video
            const linkVideo = document.querySelector('.latest-content');
            if (linkVideo && data.link_video) {
                linkVideo.href = `https://www.youtube.com/watch?v=${data.link_video}`;
            } else {
                console.log("Element #link-latest-content tidak ditemukan!");
            }

            // FEAT: status live indicator
            const profileContainer = document.querySelector('#profile-img');
            if (profileContainer && data.is_live) {
                profileContainer.classList.add('active_live');
            } else {
                profileContainer.classList.remove('active_live');
            }

        } catch (error) {
            console.log("Gagal memuat data Youtube:", error);
        }
    }
    document.addEventListener('DOMContentLoaded', updateYoutubeAPI);
})();