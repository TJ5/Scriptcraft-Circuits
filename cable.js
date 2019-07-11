module.exports.cable =  function(d, distance) {
    var i = 0;
    while (i <= distance) {
      d.down().box(blocks.wool.black).up();
      if (i%15 == 0) {
        d.box(blocks.redstone_repeater);
      }
      else {
        d.box(blocks.redstone_wire);
      }
      d.fwd();
      i+=1;
    }
