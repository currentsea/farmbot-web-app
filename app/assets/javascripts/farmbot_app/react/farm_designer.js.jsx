//= require farmbot_app/react/crop_inventory
//= require farmbot_app/react/plant_catalog
//= require farmbot_app/react/crop_info

Fb = (window.Fb || {});

class Crop {
  constructor(options) {
    this.name = (options.name || "Untitled Crop");
    this.age  = (options.age || _.random(0, 5));
    this._id  = (options._id || _.random(0, 1000));
    this.imgUrl = (options.imgUrl || "/designer_icons/unknown.svg");
  }
}

var fakeCrops = [
  new Crop({name: "Blueberry", imgUrl: "/designer_icons/blueberry.svg"}),
  new Crop({name: "Cabbage", imgUrl: "/designer_icons/cabbage.svg"}),
  new Crop({name: "Pepper", imgUrl: "/designer_icons/pepper.svg"}),
  new Crop({name: "Cilantro", imgUrl: "/designer_icons/cilantro.svg"}),
];

Fb.ToolTip = React.createClass({
  render: function(){
    return(
      <div>
        <div className="fb-tooltip">
          <div className="tooltip-text">
            { this.props.desc }
          </div>
        </div>
        <span className={ (this.props.color || "") + " plus-circle" }
              onClick={ this.props.action }>
        </span>
      </div>
    );
  }
});

$(document).ready(function() {
  Fb.leftMenuContent = document.getElementById("designer-left-content");
  Fb.leftMenu        = document.getElementById("designer-left-menu-bar");
  React.render(<Fb.CropInfoMenu crop={ fakeCrops[0] } />, Fb.leftMenu);
  React.render(<Fb.CropInfoContent crop={ fakeCrops[0] } />, Fb.leftMenuContent);
  // Fb.renderInventory();
});

