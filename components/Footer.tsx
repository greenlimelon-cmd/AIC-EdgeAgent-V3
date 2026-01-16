
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-2xl font-bold mb-6">eufy Security</h5>
            <p className="text-gray-500 max-w-md">
              致力于利用前沿 AI 技术打造最可信赖的智能家居安防系统。eufy Edge Agent 是我们对未来安全生活的全新定义。
            </p>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-6">技术中心</h6>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Bionic Mind™</a></li>
              <li><a href="#scene-intelligence" className="hover:text-blue-500 transition-colors">Scene Intelligence</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">DSKey™</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">隐私政策</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-6">支持服务</h6>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">常见问题</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs gap-4">
          <p>© 2025 eufy Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
