var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ex eget neque vehicula rutrum. In vel eleifend dolor, ut tincidunt arcu. Proin semper, turpis sit amet condimentum semper, sapien metus semper neque, vitae laoreet sem neque quis dolor. Pellentesque vel sollicitudin ipsum. Nam efficitur non massa blandit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ornare, mi quis tempor tincidunt, ex massa bibendum augue, eget mattis tellus nisi ac elit. Donec efficitur finibus convallis. Maecenas varius mi quis mi condimentum convallis. Maecenas placerat, nulla at semper dapibus, nulla velit dignissim quam, non porttitor enim mi ut nibh. Fusce tellus ligula, pharetra et nulla id, euismod maximus eros. Suspendisse vel orci ac arcu consequat elementum. Nullam id placerat magna, nec volutpat massa. Aliquam id nunc accumsan, condimentum enim at, dignissim mi. Duis et ligula interdum, facilisis felis ac, rhoncus orci. Phasellus pharetra, ante sit amet mattis suscipit, diam libero blandit mauris, et condimentum odio sapien sed tortor. Nullam bibendum tempor nisi vel scelerisque. Nunc sed nisi dapibus, imperdiet enim nec, volutpat augue."
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ex eget neque vehicula rutrum. In vel eleifend dolor, ut tincidunt arcu. Proin semper, turpis sit amet condimentum semper, sapien metus semper neque, vitae laoreet sem neque quis dolor. Pellentesque vel sollicitudin ipsum. Nam efficitur non massa blandit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ornare, mi quis tempor tincidunt, ex massa bibendum augue, eget mattis tellus nisi ac elit. Donec efficitur finibus convallis. Maecenas varius mi quis mi condimentum convallis. Maecenas placerat, nulla at semper dapibus, nulla velit dignissim quam, non porttitor enim mi ut nibh. Fusce tellus ligula, pharetra et nulla id, euismod maximus eros. Suspendisse vel orci ac arcu consequat elementum. Nullam id placerat magna, nec volutpat massa. Aliquam id nunc accumsan, condimentum enim at, dignissim mi. Duis et ligula interdum, facilisis felis ac, rhoncus orci. Phasellus pharetra, ante sit amet mattis suscipit, diam libero blandit mauris, et condimentum odio sapien sed tortor. Nullam bibendum tempor nisi vel scelerisque. Nunc sed nisi dapibus, imperdiet enim nec, volutpat augue."
    },
    {
        name: "Canyon Floor",
        image: "https://farm4.staticflickr.com/3185/2677193999_7490d5bcf5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ex eget neque vehicula rutrum. In vel eleifend dolor, ut tincidunt arcu. Proin semper, turpis sit amet condimentum semper, sapien metus semper neque, vitae laoreet sem neque quis dolor. Pellentesque vel sollicitudin ipsum. Nam efficitur non massa blandit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ornare, mi quis tempor tincidunt, ex massa bibendum augue, eget mattis tellus nisi ac elit. Donec efficitur finibus convallis. Maecenas varius mi quis mi condimentum convallis. Maecenas placerat, nulla at semper dapibus, nulla velit dignissim quam, non porttitor enim mi ut nibh. Fusce tellus ligula, pharetra et nulla id, euismod maximus eros. Suspendisse vel orci ac arcu consequat elementum. Nullam id placerat magna, nec volutpat massa. Aliquam id nunc accumsan, condimentum enim at, dignissim mi. Duis et ligula interdum, facilisis felis ac, rhoncus orci. Phasellus pharetra, ante sit amet mattis suscipit, diam libero blandit mauris, et condimentum odio sapien sed tortor. Nullam bibendum tempor nisi vel scelerisque. Nunc sed nisi dapibus, imperdiet enim nec, volutpat augue."
    },
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        // add a few campgrounds
        data.forEach(function(seed){
          Campground.create(seed, function(err, campground){
             if(err)  {
                 console.log(err);
             }else{
                 console.log("added a campground");
                 // create a comment
                 Comment.create({
                     text: "This place is great, but I wish there was internet",
                     author: "Homer"
                 }, function(err, comment){
                     if(err){
                         console.log(err);
                     }else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                     }
                 });
             }
          });
        });
    });
}

module.exports = seedDB;