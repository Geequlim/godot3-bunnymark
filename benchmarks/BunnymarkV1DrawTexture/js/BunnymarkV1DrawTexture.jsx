import bunny_texture from "res://images/godot_bunny.png";
export default class BunnymarkV1DrawTexture extends godot.Node2D {
	bunnies = [];
	grav = 500;
	screen_size = null;

	_draw() {
		for (const bunny of this.bunnies) {
			this.draw_texture(bunny_texture, bunny[0]);
		}
	}
	
	_process(delta) {
		this.screen_size = this.get_viewport_rect().size;
		
		for (let bunny of this.bunnies) {
			var pos = bunny[0];
			var newPosition = bunny[1];
			
			pos.x += newPosition.x * delta;
			pos.y += newPosition.y * delta;
			newPosition.y += this.grav * delta;
		
			if (pos.x > this.screen_size.x) {
				newPosition.x *= -1;
				pos.x = this.screen_size.x;
			}
			
			if (pos.x < 0) {
				newPosition.x *= -1;
				pos.x = 0;
			}
				
			if (pos.y > this.screen_size.y) {
				pos.y = this.screen_size.y;
				if (Math.random() > 0.5)
					newPosition.y = -(godot.randi() % 1100 + 50);
				else
					newPosition.y *= -0.85;
			}
				
			if (pos.y < 0) {
				newPosition.y = 0;
				pos.y = 0;
			}
			
			bunny[0] = pos;
			bunny[1] = newPosition;
		}
		this.update();
	}
	
	add_bunny() {
		this.bunnies.push([
			new godot.Vector2(this.screen_size.x / 2, this.screen_size.y / 2),
			new godot.Vector2(godot.randi() % 200 + 50, godot.randi() % 200 + 50)
		]);
	}
	
	remove_bunny(){
		if (this.bunnies.length == 0)
			return;
		this.bunnies.pop();
	}
	
	get_bunny_count() {
		return this.bunnies.length;
	}
	
	finish() {
		this.emit_signal("benchmark_finished", this.bunnies.length);
	}
}
godot.register_class(BunnymarkV1DrawTexture);