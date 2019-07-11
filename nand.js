
module.exports.nand = function( player ) {
    var d = new Drone(player).fwd();
    d.chkpt('nand');
    d.box(blocks.wool.black, 3, 1, 1);
    d.move('nand');
  
    d.up().box(blocks.torch_redstone).right().box(blocks.redstone_wire).right().box(blocks.torch_redstone);
    d.left().down().down().fwd().box(blocks.wool.black).up().box(blocks.redstone_wire);
    echo( player, 'Testing Cable!' );
    this.cable(d, 16);
  };

  }