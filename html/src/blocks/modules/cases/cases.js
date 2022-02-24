import gsap from 'gsap';






const casesUpdated = class CasesUpdated {
    constructor() {}
    bioline() {
        if (!document.querySelector('.cases__item.bioline')) return;
        document.querySelectorAll('.cases__item.bioline').forEach(item => {
            item.addEventListener('mousemove', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, ${event.offsetX}px 0%, ${event.offsetX}px 100%, 0% 100%)`
                });
            })
            item.addEventListener('mouseleave', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`
                });
            })
        })
    }
    medex() {
        const modelurl = "./models/border.glb";
        const modelurl2 = "./models/dots.glb";
        const modelurl5 = "./models/shield.glb";
        const modelurl6 = "./models/sphere.glb";
        const line4 = "./models/line4.glb";
        const line5 = "./models/line5.glb";
        const line6 = "./models/line6.glb";
        const circule1 = "./models/circule1.glb";
        const circule2 = "./models/circule2.glb";
        const circule3 = "./models/circule3.glb";
        let shield1StartPosition = null;
        let shield2StartPosition = null;
        let shield3StartPosition = null;
        let isMobile = false;
        const sceneMeshes = [];
        let composer, shield1, shield2, shield3, line1, line2, line3, orbit1, orbit2, orbit3, plane1, plane2, plane3;
        let shield1Pivot = new THREE.Object3D();
        let shield2Pivot = new THREE.Object3D();
        let shield3Pivot = new THREE.Object3D();
        let lockShiled1 = false;
        let lockShiled2 = false;
        let lockShiled3 = false;
        let lockLookShieled = false;
        let scene = new THREE.Scene();
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            'models/textures/NewSkyboxFace4.jpg', // Left
            'models/textures/NewSkyboxFace5.jpg', // Right
            'models/textures/NewSkyboxFace2.jpg', // Top
            'models/textures/NewSkyboxFace6.jpg', // Bottom
            'models/textures/NewSkyboxFace1.jpg', // Back
            'models/textures/NewSkyboxFace3.jpg', // Forward
        ]);
        scene.background = texture;
        //scene.background = new THREE.Color(0.009496, 0.014244, 0.037984, 1);  <== Background color
        let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
        scene.add(camera);
        let renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio(2.2);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = Math.pow(1.1, 1.3);

        document.querySelector('.cases__item.medex').appendChild(renderer.domElement);

        const pointLight = new THREE.PointLight(0xffffff, 0.3);
        camera.add(pointLight);

        if (isMobile) {
            camera.position.z = 40;
            camera.position.y = 18;
        } else {
            camera.position.z = 30;
            camera.position.y = 10;
        }

        window.step = 1;
        let pivot = new THREE.Object3D();
        scene.add(pivot);
        const renderScene = new THREE.RenderPass(scene, camera);

        const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0;
        bloomPass.strength = 1.1;
        bloomPass.radius = 0;

        composer = new THREE.EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);


        let material = new THREE.MeshStandardMaterial({
            color: 0x00b3ff,
            side: THREE.DoubleSide
        });

        var customMaterial = new THREE.ShaderMaterial({
            uniforms: {
                "s": {
                    type: "f",
                    value: -1.0
                },
                "b": {
                    type: "f",
                    value: 1.0
                },
                "p": {
                    type: "f",
                    value: 2.0
                },
                glowColor: {
                    type: "c",
                    value: new THREE.Color('#00b3ff')
                }
            },
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            transparent: false
        })

        let fixY = -12.5;
        this.loadModel(modelurl).then((model) => {
            pivot.add(model)
            model.position.y = fixY;
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = customMaterial;
                }
            });
        });

        this.loadModel(modelurl2).then((model) => {
            pivot.add(model)
            model.position.y = fixY;
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
        });

        this.loadModel(line4).then((model) => {
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            let linePivot = new THREE.Object3D();
            linePivot.add(model);
            linePivot.position.y = 0;
            linePivot.rotation.z = Math.PI / 4;
            linePivot.rotation.y = -0.22;
            scene.add(linePivot)
            line1 = model;
            line1.rotation.x = Math.PI / 4;
        });

        this.loadModel(line5).then((model) => {
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            let linePivot = new THREE.Object3D();
            linePivot.add(model);
            linePivot.position.y = 2;
            linePivot.position.x = -2;
            linePivot.rotation.z = -Math.PI / 4;
            linePivot.rotation.y = -0.22;
            scene.add(linePivot)
            line2 = model;
            line2.rotation.x = Math.PI / 2;
        });

        this.loadModel(line6).then((model) => {
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            let linePivot = new THREE.Object3D();
            linePivot.add(model);
            linePivot.position.y = 5;
            linePivot.rotation.y = -0.22;
            linePivot.scale.set(0.9, 1, 1);
            scene.add(linePivot)
            line3 = model;
        });


        this.loadModel(circule1).then((model) => {
            scene.add(model)
            model.position.y = fixY;
            model.position.z = -0.1;
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            orbit1 = model;
            orbit1.visible = false;
            if (isMobile) {
                model.rotation.y = Math.PI / 2;
                model.position.z = -10;
            }
        });

        this.loadModel(circule2).then((model) => {
            scene.add(model)
            model.position.y = fixY;
            model.position.z = 0.43;
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            orbit2 = model;
            orbit2.visible = false;
            if (isMobile) {
                orbit2.rotation.y = Math.PI / 2;
                orbit2.position.z = 10;
            }
        });

        this.loadModel(circule3).then((model) => {
            scene.add(model)
            model.position.y = fixY;
            model.position.z = -0.1;
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material = material;
                }
            });
            orbit3 = model;
            orbit3.visible = false;
            if (isMobile) {
                orbit3.rotation.y = Math.PI / 2;
            }
        });

        this.loadModel(modelurl5).then((shield1l) => {

            shield1l.position.y = fixY;
            shield1l.position.x = 16.5;
            shield1l.position.z = 0.5;
            shield1l.visible = false;

            let shield2l = shield1l.clone();
            let shield3l = shield1l.clone();

            shield1 = shield1l;
            shield2 = shield2l;
            shield3 = shield3l;

            shield2.position.x = -23.5;
            shield2.position.y = 0;
            shield3.position.y = 26;
            shield3.position.x = 0;

            const texture = new THREE.CanvasTexture(generateTexture());
            texture.magFilter = THREE.NearestFilter;
            texture.wrapT = THREE.RepeatWrapping;
            texture.wrapS = THREE.RepeatWrapping;
            texture.repeat.set(1, 3.5);

            const material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                metalness: 0.3,
                roughness: 1.0,
                ior: 0.7,
                transmission: 1,
                specularIntensity: 0.5,
                specularColor: 0xffffff,
                opacity: 1,
                side: THREE.DoubleSide,
                transparent: true
            });

            function generateTexture() {

                const canvas = document.createElement('canvas');
                canvas.width = 2;
                canvas.height = 2;

                const context = canvas.getContext('2d');
                context.fillStyle = 'white';
                context.fillRect(0, 1, 2, 1);

                return canvas;

            }

            shield1.children[1].material = material;
            shield2.children[1].material = material;
            shield3.children[1].material = material;

            shield1Pivot.add(shield1);
            shield2Pivot.add(shield2);
            shield3Pivot.add(shield3);

            scene.add(shield1Pivot);
            scene.add(shield2Pivot);
            scene.add(shield3Pivot);

            if (isMobile) {
                shield1.position.x = 0;
                shield1.position.y = 0;
                shield1.position.z = 22;

                shield2.position.x = 0;
                shield2.position.y = 0;
                shield2.position.z = 31;

                shield3.position.x = 0;
                shield3.position.y = 0;
                shield3.position.z = 39;

                const geometry = new THREE.PlaneGeometry(2.2, 2.5);
                const material = new THREE.MeshBasicMaterial({
                    color: "0xffff00",
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0
                });
                plane1 = new THREE.Mesh(geometry, material);
                plane1.name = 'shield1';
                plane1.position.copy(shield1.position)
                shield1Pivot.add(plane1);

                plane2 = plane1.clone();
                plane2.name = 'shield2';
                plane2.position.copy(shield2.position)
                shield2Pivot.add(plane2);

                plane3 = plane1.clone();
                plane3.name = 'shield3';
                plane3.position.copy(shield3.position)
                shield3Pivot.add(plane3);

                sceneMeshes.push(plane1);
                sceneMeshes.push(plane2);
                sceneMeshes.push(plane3);

            }

            shield1StartPosition = {
                x: shield1.position.x,
                y: shield1.position.y,
                z: shield1.position.z,
            }

            shield2StartPosition = {
                x: shield2l.position.x,
                y: shield2l.position.y,
                z: shield2l.position.z,
            }

            shield3StartPosition = {
                x: shield3l.position.x,
                y: shield3l.position.y,
                z: shield3l.position.z,
            }


        });

        let shieldPivotRotationZ = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            pivot.rotation.y += 0.01;
            shieldPivotRotationZ += 0.01;
            if (shieldPivotRotationZ >= (Math.PI * 2)) {
                shieldPivotRotationZ = 0;
            }
            shieldPivotRotationZ += 0.01;
            if (line1) {
                line1.rotation.x += 0.06;
            }
            if (line2) {
                line2.rotation.x += 0.06;
            }
            if (line3) {
                line3.rotation.y += 0.06;
            }
            if (!lockShiled1) {
                shield1Pivot.rotation.z = shieldPivotRotationZ;
            }
            if (!lockShiled2) {
                shield2Pivot.rotation.z = shieldPivotRotationZ;
            }
            if (!lockShiled3) {
                shield3Pivot.rotation.z = shieldPivotRotationZ;
            }
            if (!isMobile) {
                if (shield1) {
                    shield1.lookAt(new THREE.Vector3(0, 0, 1000))
                }
                if (shield2) {
                    if (!lockLookShieled) {
                        shield2.lookAt(new THREE.Vector3(0, 0, 1000))
                    }
                }
                if (shield3) {
                    shield3.lookAt(new THREE.Vector3(0, 0, 1000))
                }
            }
            composer.render();
            TWEEN.update()
        };

        animate();

        let tasks = [];

        const clearTasks = () => {
            TWEEN.removeAll()
            for (let i = -0; i < tasks.length; i++) {
                clearTimeout(tasks[i])
            }
        }

        let endRotation = camera.quaternion.clone();

        const cameraSetup = (point, duration) => {
            new TWEEN.Tween(camera.rotation).to(point, duration ? duration : 2000).start();
        }

        window.step1 = () => {


            let cameraFrom = {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z
            }

            new TWEEN.Tween(cameraFrom).to({
                    x: 23,
                    y: -20,
                    z: 100
                }, 2000)
                .easing(TWEEN.Easing.Cubic.Out)
                .onUpdate(function () {
                    camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);
                }).start();

            // orbit1.visible = false;
            // orbit2.visible = false;
            // orbit3.visible = false;
            // shield1.visible = false;
            // shield2.visible = false;
            // shield3.visible = false;

        }
        step1();
    }
    setParalax() {
        document.querySelectorAll('.cases__item[data-is_paralaxed]').forEach(item => {
            item.addEventListener('mousemove', (event) => {
                console.log(event.offsetX,event.offsetY);
                item.querySelectorAll('[data-speed]').forEach(elem => {
                    console.log(elem.dataset.speed);
                    gsap.to(elem, {
                        x: event.offsetX / elem.dataset.speed,
                        y: event.offsetY / elem.dataset.speed
                    });
                })
            })
        });
    }


    loadModel(url) {
        return new Promise((resolve, reject) => {
            const manager = new THREE.LoadingManager();
            const loader = new THREE.GLTFLoader(manager);
            loader.load(url,
                function (gltf) {
                    resolve(gltf.scene)
                },
                function (xhr) {
    
                },
                function (error) {
                    console.log(error);
                }
            );
        });
    }
    init() {
        if (!document.querySelector('.cases__items') || window.innerWidth <= 1024) return;
        this.bioline();
        this.setParalax();
        this.medex();
    }
}
export default casesUpdated;