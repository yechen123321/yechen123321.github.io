# 生活点滴

<div class="life-hero">
  <div class="life-content">
    <h1>生活中的美好时光</h1>
    <p>记录工作之外的生活片段，分享旅行、阅读、思考的点点滴滴</p>
  </div>
  <div class="life-illustration">
    <div class="life-icon">🍃</div>
  </div>
</div>

## 最新分享

<div class="life-grid">

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">🌄</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">旅行</span>
      <span>📅 2024-01-15</span>
    </div>
    <h3><a href="./travel-mountain">山间徒步之旅</a></h3>
    <p>上周末的山间徒步让我重新找回了内心的宁静。远离城市的喧嚣，在大自然中感受生命的美好...</p>
  </div>
</div>

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">📚</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">阅读</span>
      <span>📅 2024-01-10</span>
    </div>
    <h3><a href="./book-thinking">《深度工作》读后感</a></h3>
    <p>最近读完了《深度工作》这本书，深受启发。在这个信息爆炸的时代，专注力已成为稀缺资源...</p>
  </div>
</div>

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">🎵</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">音乐</span>
      <span>📅 2024-01-05</span>
    </div>
    <h3><a href="./music-jazz">爵士乐的魅力</a></h3>
    <p>最近迷上了爵士乐，那种即兴的自由与和谐的律动让人着迷。音乐真的是人类最美好的创造之一...</p>
  </div>
</div>

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">🍳</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">美食</span>
      <span>📅 2023-12-28</span>
    </div>
    <h3><a href="./cooking-adventure">新年料理尝试</a></h3>
    <p>新年将至，尝试做几道新菜式。烹饪不仅是为了满足味蕾，更是一种创造和享受的过程...</p>
  </div>
</div>

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">🏛️</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">文化</span>
      <span>📅 2024-01-20</span>
    </div>
    <h3><a href="./hefei-museum">合肥博物馆参观记</a></h3>
    <p>周末参观了合肥博物馆，探寻这座城市的前世今生，感受庐州府地的文化瑰宝...</p>
  </div>
</div>

<div class="life-card">
  <div class="life-image">
    <div class="placeholder-image">🎤</div>
  </div>
  <div class="life-content">
    <div class="life-meta">
      <span class="life-tag">音乐</span>
      <span>📅 2024-01-25</span>
    </div>
    <h3><a href="./david-tao-concert">陶喆演唱会现场体验</a></h3>
    <p>现场感受华语R&B教父的音乐魅力，重温那些陪伴青春岁月的经典歌曲...</p>
  </div>
</div>

</div>

## 分类浏览

<div class="category-section">
  <h2>内容分类</h2>
  <div class="category-grid">
    <div class="category-card">
      <div class="category-icon">✈️</div>
      <h3>旅行</h3>
      <p>32篇分享</p>
    </div>
    
    <div class="category-card">
      <div class="category-icon">📚</div>
      <h3>阅读</h3>
      <p>28篇分享</p>
    </div>
    
    <div class="category-card">
      <div class="category-icon">🎵</div>
      <h3>音乐</h3>
      <p>15篇分享</p>
    </div>
    
    <div class="category-card">
      <div class="category-icon">🍳</div>
      <h3>美食</h3>
      <p>21篇分享</p>
    </div>
    
    <div class="category-card">
      <div class="category-icon">🌱</div>
      <h3>生活感悟</h3>
      <p>42篇分享</p>
    </div>
    
    <div class="category-card">
      <div class="category-icon">📸</div>
      <h3>摄影</h3>
      <p>18篇分享</p>
    </div>
  </div>
</div>

<style scoped>
.life-hero {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.life-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.life-content {
  flex: 1;
  z-index: 1;
}

.life-content h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.life-content p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.life-illustration {
  z-index: 1;
}

.life-hero .life-icon {
  font-size: 4rem;
  opacity: 0.8;
}

.life-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.life-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.life-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.life-image {
  height: 200px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  font-size: 4rem;
}

.life-content {
  padding: 1.5rem;
}

.life-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.life-tag {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.life-card h3 {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.life-card h3 a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.life-card h3 a:hover {
  color: #2575fc;
}

.life-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.category-section {
  margin: 4rem 0;
}

.category-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  padding: 2rem 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(37, 117, 252, 0.15);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.category-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .life-hero {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .life-content h1 {
    font-size: 2rem;
  }
  
  .life-grid {
    grid-template-columns: 1fr;
  }
  
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>