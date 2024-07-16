const containerEl = document.querySelector(".animation-container");
const canvasEl = containerEl.querySelector("#animation");
const ctx = canvasEl.getContext('2d');

const resolution = 1.3;
const params = {
    density: .02,
    mouseMagnet: 500 * resolution,
    mouseThreshold: .7,
    floatingSpeed: .0005,
    floatingDist: 4,
}

let mouse = {
    x: null, y: null
};

let particlesData = [];
let size = [];
let particlesNumber = 0;

imageToParticles();
sampleCoordinates();
updateCanvas(0);
addListeners();


window.addEventListener("resize", () => {
    particlesData = [];
    imageToParticles();
    sampleCoordinates();
});


function imageToParticles() {
    size = [containerEl.clientWidth, containerEl.clientHeight];
    size = size.map(v => resolution * v);
    canvasEl.width = size[0];
    canvasEl.height = size[1];
    particlesNumber = Math.floor(params.density * Math.sqrt(size[0] * size[0] + size[1] * size[1]));
}

function addListeners() {
    containerEl.onmousemove = function (e) {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
        mouse.x *= resolution;
        mouse.y *= resolution;
    }
    containerEl.ontouchmove = function (e) {
        const rect = e.target.getBoundingClientRect();
        mouse.x = e.targetTouches[0].pageX - rect.left;
        mouse.y = e.targetTouches[0].pageY - rect.top;
        mouse.x *= resolution;
        mouse.y *= resolution;
    }

    let touchMagnet = params.mouseMagnet;
    containerEl.ontouchstart = function () {
        params.mouseMagnet = touchMagnet;
    }
    containerEl.ontouchend = function () {
        touchMagnet = params.mouseMagnet
        params.mouseMagnet = 0;
    }
}


function sampleCoordinates() {
    let initCoordinates = [];

    let x, y, angle;
    const maxRadius = .2 * Math.min(size[0], size[1]);

    for (let i = 0; i < particlesNumber; i++) {
        x = .5 * size[0];
        y = .5 * size[1];
        angle = Math.random() * 360;
        x += Math.cos(angle) * maxRadius;
        y += Math.sin(angle) * maxRadius;
        initCoordinates.push({
            xy: [x, y],
        });
    }

    particlesData = new Array(particlesNumber).fill(0);
    particlesData = particlesData.map((v, i) => {
        return {
            xy: initCoordinates[i].xy,
            base: initCoordinates[i].xy,
            target: initCoordinates[i].xy,
            rand: [Math.random(), Math.random()],
            speed: .5 + .5 * Math.random(),
            floatingTimeStart: Math.random() * 2 * Math.PI,
            floatingDist: [params.floatingDist * (Math.random() - .5), params.floatingDist * (Math.random() - .5)]
        }
    });
}


function updateCanvas(time) {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.fillStyle = "#000000";

    for (let i = 0; i < particlesNumber; i++) {
        const d = particlesData[i];

        let dX = mouse.x - d.target[0];
        let dY = mouse.y - d.target[1];

        let sqDist = (dX * dX) + (dY * dY);

        const floatingOffset = [
            Math.sin(params.floatingSpeed * d.speed * time + d.floatingTimeStart) * d.floatingDist[0],
            Math.cos(params.floatingSpeed * d.speed * time + .5 * Math.PI + d.floatingTimeStart) * d.floatingDist[1]
        ]

        const mouseOffset = [
            params.mouseMagnet * dX / sqDist,
            params.mouseMagnet * dY / sqDist,
        ]

        d.target[0] = d.base[0] + floatingOffset[0] - mouseOffset[0];
        d.target[1] = d.base[1] + floatingOffset[1] - mouseOffset[1];

        d.xy[0] += (d.target[0] - d.xy[0]) * params.mouseThreshold;
        d.xy[1] += (d.target[1] - d.xy[1]) * params.mouseThreshold;

        const p = new Path2D("M" + d.xy[0] + ", " + d.xy[1] + " " +
            "l-3.2,-3.9l-5.9,5a70.5,70.5,0,0,0,-5.7,-4.3l5,-5l-3.6,-3.5l-5.8,5.8a45.8,45.8,0,0,0,-10.4,-4.4l1.5,-8.2l-5,-0.9l-1.4,8.2l-3.6,-0.3a36,36,0,0,0,-11.4,2.1l-2.8,-6.5l-4.6,1.9l2.8,6.6a58.3,58.3,0,0,0,-7,4l-5.5,-7.1l-4,3.1l5.4,6.9c-5.5,4.4,-9.1,8.4,-9.8,8.6a99.6,99.6,0,0,0,10.3,9.2l-5,2.5l2.2,4.5l7.5,-3.8l3.6,2.1l-0.7,4l5,0.9l0.4,-2.7a46,46,0,0,0,6.6,2v6.2h5v-5.5h2a34.3,34.3,0,0,0,8.6,-1.1l5.8,2.9l2.2,-4.5l-1.4,-0.7a54.8,54.8,0,0,0,10.4,-6.1l4,4.7l3.8,-3.3l-3.8,-4.5c4.1,-3.4,6.7,-6.3,7.3,-6.8s-1.9,-1.6,-4.1,-3.7zm-50.1,-3.8a16.4,16.4,0,0,0,0.3,23.9c-5.2,-2.1,-11.2,-5.7,-17.9,-11.8c3.8,-3.5,10.1,-8.9,17.6,-12.1zm22,24.5a16.1,16.1,0,0,0,6,-12.7a16.3,16.3,0,0,0,-5.8,-12.5c8.3,3.1,15.3,9,19.4,12.8c-7.4,6.8,-14,10.5,-19.6,12.4z");

        ctx.fill(p);
    }

    window.requestAnimationFrame(updateCanvas);
}