extends Node2D

static func fibR(var n):
	if n < 2:
		return n
	return fibR(n-2) + fibR(n-1)
const N = 36


var elapsed = 0

func _ready():
	var start = OS.get_ticks_msec()
	print("fib: ", fibR(N))
	elapsed = OS.get_ticks_msec() - start
	self.finish()

func _process(delta):
	pass

func add_bunny():
	pass

func remove_bunny():
	pass

func get_bunny_count():
	return elapsed

func finish():
	emit_signal("benchmark_finished", get_bunny_count())