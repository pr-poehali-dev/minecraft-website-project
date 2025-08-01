import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [onlineCount, setOnlineCount] = useState(1247);

  const servers = [
    {
      id: 1,
      name: "🌍 Выживание",
      description: "Классический режим выживания с друзьями",
      online: 892,
      maxPlayers: 1000,
      version: "1.20.4",
      status: "online"
    },
    {
      id: 2,
      name: "⚔️ PvP Арена",
      description: "Сражения игроков в специальных аренах",
      online: 245,
      maxPlayers: 500,
      version: "1.20.4",
      status: "online"
    },
    {
      id: 3,
      name: "🏗️ Креатив",
      description: "Строительство без ограничений",
      online: 110,
      maxPlayers: 200,
      version: "1.20.4",
      status: "online"
    }
  ];

  const shopItems = [
    {
      id: 1,
      name: "Алмазный меч",
      description: "Острый меч с зачарованиями",
      price: 50,
      category: "Оружие",
      image: "img/192cbab8-7f9e-4555-b44d-edb9a7252bcb.jpg"
    },
    {
      id: 2,
      name: "Изумруды",
      description: "Пачка из 64 изумрудов",
      price: 25,
      category: "Ресурсы",
      image: "img/02cda6a9-7f4a-4b03-a717-11d407847410.jpg"
    },
    {
      id: 3,
      name: "Блоки травы",
      description: "Стак блоков травы для строительства",
      price: 10,
      category: "Блоки",
      image: "img/53ae86f5-a6e0-4a35-a1c1-c19def4cfe62.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-green-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 border-2 border-green-800" style={{imageRendering: 'pixelated'}}></div>
            <h1 className="text-2xl font-bold text-white">MINECRAFT SERVER</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-600 text-white hover:bg-green-700">
              <Icon name="Users" size={14} className="mr-1" />
              {onlineCount} игроков
            </Badge>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            ДОБРО ПОЖАЛОВАТЬ В НАШ МИР
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Присоединяйся к тысячам игроков в эпических приключениях! 
            Стройте, исследуйте и сражайтесь в нашем уникальном мире Minecraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg border-2 border-green-800">
              <Icon name="Play" size={20} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              <Icon name="Download" size={20} className="mr-2" />
              СКАЧАТЬ МОД
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="servers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800 border-2 border-gray-600">
            <TabsTrigger value="servers" className="text-white data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Icon name="Server" size={16} className="mr-2" />
              СЕРВЕРА
            </TabsTrigger>
            <TabsTrigger value="shop" className="text-white data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              МАГАЗИН
            </TabsTrigger>
          </TabsList>

          {/* Servers Tab */}
          <TabsContent value="servers">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servers.map((server) => (
                <Card key={server.id} className="bg-gray-800 border-2 border-gray-600 hover:border-green-500 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{server.name}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {server.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-600 text-white">
                        {server.status === 'online' ? 'Онлайн' : 'Офлайн'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Игроков:</span>
                        <span className="text-green-400">{server.online}/{server.maxPlayers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Версия:</span>
                        <span className="text-blue-400">{server.version}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white border-2 border-green-800">
                      <Icon name="LogIn" size={16} className="mr-2" />
                      Подключиться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Shop Tab */}
          <TabsContent value="shop">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shopItems.map((item) => (
                <Card key={item.id} className="bg-gray-800 border-2 border-gray-600 hover:border-amber-500 transition-colors">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center border-2 border-gray-600">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                        style={{imageRendering: 'pixelated'}}
                      />
                    </div>
                    <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="border-amber-500 text-amber-400">
                        {item.category}
                      </Badge>
                      <span className="text-xl font-bold text-amber-400">
                        {item.price} 💎
                      </span>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white border-2 border-amber-800">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t-2 border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">О СЕРВЕРЕ</h3>
              <p className="text-gray-300 text-sm">
                Лучший Minecraft сервер с уникальными режимами игры, 
                дружелюбным сообществом и стабильной работой 24/7.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">КОНТАКТЫ</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📧 support@mcserver.ru</div>
                <div>💬 Telegram: @mcserver</div>
                <div>🎮 Discord: MinecraftRU</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ПРАВИЛА</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Без читов и багоюза</div>
                <div>• Уважение к игрокам</div>
                <div>• Не спамить в чате</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Minecraft Server. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}