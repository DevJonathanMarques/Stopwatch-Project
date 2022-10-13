
	class Cronometro {
		constructor() {
			this.segundo = 1
			this.minuto = 1
			this.hora = 1
		}

		//START DO CRONOMETRO
		start() {
			this.cronometro  = setInterval(() => {

				document.getElementById('cronometro').className = 'd-flex justify-content-center text-success'

				///////////////////////////////////////////////////////////////////////
				//SEGUNDOS
				if (this.segundo > 9) {
					document.getElementById('segundo').innerHTML = this.segundo
				} else {
					document.getElementById('segundo').innerHTML = '0'+this.segundo
				}

				this.segundo += 1

				///////////////////////////////////////////////////////////////////////
				//MINUTOS
				if (this.segundo > 60) {
					document.getElementById('segundo').innerHTML = '00'
					this.segundo = 0

					if (this.minuto > 10) {
						document.getElementById('minuto').innerHTML = this.minuto
					} else {
						document.getElementById('minuto').innerHTML = '0'+this.minuto
					}

					this.minuto += 1
				}

				///////////////////////////////////////////////////////////////////////
				//HORAS
				if (this.minuto > 60) {
					document.getElementById('segundo').innerHTML = '00'
					this.segundo = 0

					document.getElementById('minuto').innerHTML = '00'
					this.minuto = 0

					if (this.hora > 10) {
						document.getElementById('hora').innerHTML = this.hora
					} else {
						document.getElementById('hora').innerHTML = '0'+this.hora
					}

					this.hora += 1
				}

			}, 1000)
		}

		//STOP DO CRONOMETRO
		stop() {
			document.getElementById('cronometro').className = 'd-flex justify-content-center text-danger'

			clearInterval(this.cronometro)
		}

		//RESET DO CRONOMETRO
		reset() {
			document.getElementById('cronometro').className = 'd-flex justify-content-center text-dark'

			document.getElementById('segundo').innerHTML = '00'
			this.segundo = 0
			document.getElementById('minuto').innerHTML = '00'
			this.minuto = 0
			document.getElementById('hora').innerHTML = '00'
			this.hora = 0
		}

	}