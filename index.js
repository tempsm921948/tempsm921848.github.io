var urls = [
    "https://kiyutink.github.io/nyc/nyc1.jpg",
    "https://kiyutink.github.io/nyc/nyc2.jpg",
    "https://kiyutink.github.io/nyc/nyc3.jpg",
    "https://kiyutink.github.io/nyc/nyc4.jpg",
    "https://kiyutink.github.io/nyc/nyc5.jpg",
    "https://kiyutink.github.io/london/london1.jpg",
    "https://kiyutink.github.io/london/london2.jpg",
    "https://kiyutink.github.io/london/london3.jpg",
    "https://kiyutink.github.io/madrid/madrid1.jpg",
    "https://kiyutink.github.io/madrid/madrid2.jpg",
    "https://kiyutink.github.io/madrid/madrid3.jpg",
    "https://kiyutink.github.io/beijing/beijing1.jpg",
    "https://kiyutink.github.io/beijing/beijing2.jpg",
    "https://kiyutink.github.io/beijing/beijing3.jpg",
    "https://kiyutink.github.io/moscow/moscow1.jpg",
    "https://kiyutink.github.io/moscow/moscow2.jpg",
    "https://kiyutink.github.io/moscow/moscow3.jpg",
    "https://kiyutink.github.io/sidney/sidney1.jpg",
    "https://kiyutink.github.io/sidney/sidney2.jpg",
    "https://kiyutink.github.io/sidney/sidney3.jpg",
    "https://kiyutink.github.io/tokyo/tokyo1.jpg",
    "https://kiyutink.github.io/tokyo/tokyo2.jpg",
    "https://kiyutink.github.io/tokyo/tokyo3.jpg",
    "https://kiyutink.github.io/la/la3.jpg"
];
var urls1 = [
  "https://media.baamboozle.com/uploads/images/72450/1619661345_28453_gif-url.gif",
  "https://i.pinimg.com/originals/65/73/89/657389974169296bce2520f3b8d084c6.gif",
  "https://i.pinimg.com/originals/bd/3a/9e/bd3a9ec7ff6c3e907bb5763b1f145b78.gif",
  "https://i.pinimg.com/originals/bd/3a/9e/bd3a9ec7ff6c3e907bb5763b1f145b78.gif",
  "https://i.pinimg.com/originals/20/ed/36/20ed36d4090aaa3c5f286154af2f5003.gif",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
  "https://i.pinimg.com/originals/f4/21/4e/f4214e9bbfdfbb71a727428c7fc41117.gif",
  "https://cdn.dribbble.com/users/5010825/screenshots/11139921/media/6e0647fa2497564e20789ecfd08b4487.gif",
  "https://i.pinimg.com/originals/5c/d9/40/5cd940077b21bb5f225b64271e9a288e.gif",
  "https://i.pinimg.com/originals/de/53/8d/de538d450d41f34c88352d6468a63657.gif",
  "https://media.baamboozle.com/uploads/images/72450/1619661345_28453_gif-url.gif",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
  "https://i.pinimg.com/originals/72/08/01/72080144ba554fe79405548e059e52d7.gif",
  "https://i.pinimg.com/originals/65/73/89/657389974169296bce2520f3b8d084c6.gif",
  "https://i.pinimg.com/originals/20/ed/36/20ed36d4090aaa3c5f286154af2f5003.gif",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
  "https://i.pinimg.com/originals/db/75/b9/db75b9a356c402dec868cab8b08e4873.gif",
  "https://cdn.dribbble.com/users/8666/screenshots/925560/agif2.gif",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/66699a108874815.5fc76632df1f0.gif",
  "https://i.pinimg.com/originals/f0/6e/dc/f06edcb8def745fd2ebed5b90d0e3b86.gif",
  "https://i.pinimg.com/originals/b4/8e/51/b48e5183fdbb11c8969cf4d9113835c1.gif",
  "https://i.pinimg.com/originals/64/37/15/643715e2fc210a3943f25c2b7ebacb77.gif"
];


function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
window.onload = $(document).ready(function() {
  const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000);
};

//  for stopping the confetti 

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000);
};
start();
stop();
  var rows = 4; 
  var cols = 6; 
  var staggerTime = 20;

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })(); 
 
  
  $gallery.html('');
  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }
  
  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls1[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      // $help.html("Click any of the tiles to get back");
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;
    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);
    
    
    showFront(0, $parts.length);
    
  });
  
  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");
    
    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
  // wait(5000); 
});

$(document).ready(function() {
  setTimeout(function(){
    var rows = 4; 
    var cols = 6; 
    var staggerTime = 20;
  
    var $gallery = $(".demo__gallery");
    var $help = $(".demo__help");
    var partsArray = [];
    var reqAnimFr = (function() {
      return window.requestAnimationFrame || function(cb) {
        setTimeout(cb, 1000 / 60);
      }
    })(); 
   
    
    $gallery.html('');
    for (let row = 1; row <= rows; row++) {
      partsArray[row - 1] = [];
      for (let col = 1; col <= cols; col++) {
        $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
        partsArray[row - 1][col - 1] = new Part();
      }
    }
    
    var $parts = $(".demo__part");
    var $image = $(".demo__part-back-inner");
    var help = true;
  
    for (let i = 0; i < $parts.length; i++) {
      $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
    }
  
    $gallery.on("click", ".demo__part-front", function() {
  
      $image.css("background-image", $(this).css("background-image"));
      if (help) {
        // $help.html("Click any of the tiles to get back");
        help = false;
      }
  
      let row = +$(this).closest(".demo__part").attr("row");
      let col = +$(this).closest(".demo__part").attr("col");
      waveChange(row, col);
    });
  
    $gallery.on("click", ".demo__part-back", function() {
      if (!isShowingBack()) return;
      setTimeout(function() {
        for (let row = 1; row <= rows; row++) {
          for (let col = 1; col <= cols; col++) {
            partsArray[row - 1][col - 1].showing = "front";
          }
        }
      }, staggerTime + $parts.length * staggerTime / 10);
      
      
      showFront(0, $parts.length);
      
    });
    
    function showFront(i, maxI) {
      if (i >= maxI) return;
      $parts.eq(i).addClass("show-front");
      
      reqAnimFr(function() {
        showFront(i + 1);
      });
    }
  
    function isShowingBack() {
      return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
    }
  
    function Part() {
      this.showing = "front";
    }
  
    function waveChange(rowN, colN) {
      if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
      if (partsArray[rowN - 1][colN - 1].showing == "back") return;
      $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
      partsArray[rowN - 1][colN - 1].showing = "back";
      setTimeout(function() {
        waveChange(rowN + 1, colN);
        waveChange(rowN - 1, colN);
        waveChange(rowN, colN + 1);
        waveChange(rowN, colN - 1);
      }, staggerTime);
    }

  },7000);


});