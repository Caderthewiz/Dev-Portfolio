<script lang="ts">
    import { onMount } from "svelte";
    import p5 from 'p5';

    let canvasContainer : HTMLDivElement;

    onMount (() => {
        const sketch = (p: p5) => {
            const nPoints = 2500;
            const opacity = 40;
            const speed = 0.8;
            const positionScale = 180;
            const angleAmp = 2;

            const points: p5.Vector[] = [];
            
            let width = 0;
            let height = 0;

            const createPoint = () => {
                return p.createVector(
                    p.random(width),
                    p.random(height)
                )
            };

            p.setup = () => {
                width = canvasContainer.clientWidth || window.innerWidth;
                height = canvasContainer.clientHeight || window.innerHeight;

                const canvas = p.createCanvas(width, height);
                canvas.parent(canvasContainer);

                p.clear();
                
                p.stroke(63, 116, 216, opacity);
                p.strokeWeight(1);
                p.noFill();

                for (let i = 0; i < nPoints; i++) {
                    points.push(createPoint())
                }

                requestAnimationFrame(() => {
                    const realWidth = canvasContainer.clientWidth;
                    const realHeight = canvasContainer.clientHeight;
 
                    if (realWidth && realHeight && (realWidth !== width || realHeight !== height)) {
                        width = realWidth;
                        height = realHeight;
                        p.resizeCanvas(width, height);
                        p.clear();
                        points.forEach((_, i) => (points[i] = createPoint()));
                    }
                });
            };

            p.draw = () => {
                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    const previousX = point.x;
                    const previousY = point.y;

                    const direction =
                        2 * angleAmp * Math.PI *
                        p.noise(point.x / positionScale, point.y / positionScale);

                    point.x += Math.cos(direction) * speed;
                    point.y += Math.sin(direction) * speed;

                    if (point.x < 0 || point.x > width || point.y < 0 || point.y > height) {
                        points[i] = createPoint();
                        continue;
                    }

                    p.line(previousX, previousY, point.x, point.y);
                }
            };

            p.windowResized = () => {
                const newWidth = canvasContainer.clientWidth;
                const newHeight = canvasContainer.clientHeight;

                width = newWidth;
                height = newHeight;

                p.resizeCanvas(width, height);
                p.clear();
                for (let i = 0; i < points.length; i++) {
                    points[i] = createPoint();
                }
            };
        };

        const instance = new p5(sketch);

        return () => {
            instance.remove();
        };
    });
</script>

<div class="flow-field" bind:this={canvasContainer}></div>

<style>
	.flow-field {
	    position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.flow-field :global(canvas) {
		display: block;
        position: absolute;
        inset: 0;
	}
</style>