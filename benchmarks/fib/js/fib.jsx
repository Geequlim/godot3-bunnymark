const N = 36;

export default class fib extends godot.Node2D {
	
	duration = 0;
	
	fibR(n) {
		if (n < 2) return n;
		return (this.fibR(n-2) + this.fibR(n-1));
	};

	_ready() {
		let start = godot.OS.get_ticks_msec();
		console.log("fib: ", this.fibR(N));
		this.duration = godot.OS.get_ticks_msec() - start;
		this.finish()
	}
	
	add_bunny() {
		
	}
	
	remove_bunny() {
		
	}
	
	get_bunny_count() {
		return this.duration;
	}

	finish() {
		this.emit_signal("benchmark_finished", this.get_bunny_count());
	}

};