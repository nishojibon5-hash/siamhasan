import { useState } from "react";
import {
  MapPin,
  Home,
  Cake,
  School,
  Users,
  MessageCircle,
  Phone,
  Facebook,
  Edit2,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const [activeTab, setActiveTab] = useState("all");

  const userInfo = {
    name: "Siam Hasan",
    title: "Digital Creator",
    followers: 493,
    following: 68,
    posts: 338,
    bio: "-----Unpredictable 😊 ----Can't you read my mind? 😒 Love only family ❤️ and my brother 🎀",
    location: "Araihazar, Dhaka, Bangladesh",
    residence: "Araihazar, Dhaka, Bangladesh",
    birthday: "16 September",
    school: "Govt. Safar Ali College",
    college: "Govt. Safar Ali College",
    highSchool: "Shinghadi M. A. Motalab Bhuiyan High School",
    workplace: "Clash of Clans",
    currentLocation: "Araihazar",
    instagram: "siamhasanrodro",
    phone: "01931091653",
    facebook: "https://www.facebook.com/share/1BNTAyyknL/",
  };

  const dummyPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1531927557220-a0ec21b4d000?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=crop",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1514306688772-aefcc7b87413?w=500&h=500&fit=crop",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop",
    },
  ];

  const communities = [
    {
      id: 1,
      name: "Govt safar ali College student ❤️⚡",
      role: "Member of group",
      image: "https://images.unsplash.com/photo-1427504494785-cdaf72c4e4b7?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            <Phone className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </header>

      {/* Cover Photo Section */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-48 md:h-64 bg-gradient-to-br from-orange-400 via-yellow-300 to-blue-500 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition">
              <Edit2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Profile Info Section */}
          <div className="px-4 md:px-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12 relative z-10">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1db204990c154da4986e8ac44c495cbb%2Fe5b9fed0b2474cb79c1d1cf98027584b?format=webp&width=800&height=1200"
                  alt={userInfo.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              {/* Name and Stats */}
              <div className="flex-grow pb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {userInfo.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {userInfo.title}
                </p>
                <div className="flex gap-6 mt-3 text-sm md:text-base">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">
                      {userInfo.followers}
                    </span>
                    <span className="text-gray-600">followers</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">
                      {userInfo.following}
                    </span>
                    <span className="text-gray-600">following</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">
                      {userInfo.posts}
                    </span>
                    <span className="text-gray-600">posts</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 md:flex-col">
                <Button className="flex-1 md:w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 md:w-40 border-gray-300 hover:bg-gray-100 font-semibold"
                >
                  Add to Story
                </Button>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
              {userInfo.bio}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">
              <a
                href={`tel:${userInfo.phone}`}
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Phone className="w-4 h-4" />
                {userInfo.phone}
              </a>
              <a
                href={userInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Personal Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Personal Details
                </h3>
                <Edit2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Lives in</p>
                    <p className="text-gray-900 font-medium">
                      {userInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Home className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">From</p>
                    <p className="text-gray-900 font-medium">
                      {userInfo.residence}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Cake className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Birthday</p>
                    <p className="text-gray-900 font-medium">
                      {userInfo.birthday}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <School className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Studied at</p>
                    <p className="text-gray-900 font-medium">
                      {userInfo.college}
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 text-blue-600 font-semibold hover:bg-gray-50 py-2 rounded transition text-sm">
                See more details
              </button>
            </div>

            {/* Communities Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Communities
              </h3>

              {communities.map((community) => (
                <div key={community.id} className="flex gap-3">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {community.name}
                    </p>
                    <p className="text-xs text-gray-600">{community.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Feed */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full justify-start bg-white border-b rounded-none p-0">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-6 py-3"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="reels"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-6 py-3"
                  >
                    Reels
                  </TabsTrigger>
                  <TabsTrigger
                    value="photos"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-6 py-3"
                  >
                    Photos
                  </TabsTrigger>
                  <TabsTrigger
                    value="events"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-6 py-3"
                  >
                    Events
                  </TabsTrigger>
                </TabsList>

                {/* Tab Contents */}
                <TabsContent value="all" className="p-0">
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {dummyPosts.map((post) => (
                      <div
                        key={post.id}
                        className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition cursor-pointer group"
                      >
                        <img
                          src={post.image}
                          alt={`Post ${post.id}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reels" className="p-6 text-center text-gray-500">
                  <p>No reels yet. Check back soon!</p>
                </TabsContent>

                <TabsContent value="photos" className="p-0">
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {dummyPosts.slice(0, 3).map((post) => (
                      <div
                        key={post.id}
                        className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition cursor-pointer group"
                      >
                        <img
                          src={post.image}
                          alt={`Photo ${post.id}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="events" className="p-6 text-center text-gray-500">
                  <p>No upcoming events.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
