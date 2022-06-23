var tipuesearch = {"pages": [{'title': 'About', 'text': '', 'tags': '', 'url': 'About.html'}, {'title': '每周任務', 'text': '', 'tags': '', 'url': '每周任務.html'}, {'title': 'W2', 'text': '\n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W7', 'text': '設法以隨身程式系統編譯此程式碼: \n \n git clone \xa0 https://github.com/mdecourse/scarysim.git \n 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU \n cd scarysim \n qmake -o Makefile scarysim.pro \n mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe \n 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄執行. \n 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 \xa0 Pick and Place demo \xa0 範例. \n 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 \xa0 Pick and Place demo \xa0 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案。 \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': 'https://cad.onshape.com/documents/3e864d170ec08d24a54944c2/w/96bdc8a89188408b47dc2d90/e/b1a56c579e6368d24fbe7a7c?renderMode=0&uiState=625d16f1fa512521add7f836 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'w10_block_ui', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'w10_nx_integ', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_nx_integ.html'}, {'title': 'w10_ssh', 'text': '\n \n \n   \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_cadlab_startup', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_cadlab_startup.html'}, {'title': 'w12_graduate_school', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_graduate_school.html'}, {'title': 'w12_task', 'text': '\n \n \n   \n \n \n \n \n', 'tags': '', 'url': 'w12_task.html'}, {'title': 'w15', 'text': '\n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '', 'tags': '', 'url': 'w16.html'}, {'title': 'uarm_nx_tkinter_gui_control', 'text': '\n SciTE 執行 uarm_tkinter_control.py \n \n \n 按下面的to connect就能移動看看 \n', 'tags': '', 'url': 'uarm_nx_tkinter_gui_control.html'}, {'title': 'rotating_cuboid', 'text': '\n 把這行原本的coppeliaSim.exe位置改成自己放的位置 \n \n 改完後執行就會有兩個攝像頭 \n (如果卡住跑不出來可以按暫停再重新開始) \n', 'tags': '', 'url': 'rotating_cuboid.html'}, {'title': 'Online Exam', 'text': '\n 未轉動前的座標 \n \n 各轉 5 度之後的座標 \n \n 吸取方塊時的座標 \n', 'tags': '', 'url': 'Online Exam.html'}, {'title': 'ag5', 'text': '\n', 'tags': '', 'url': 'ag5.html'}, {'title': 'NX video', 'text': '第3部 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n --------------------------------- \n 第10部 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n --------------------------------- \n 第29部 \n \n --------------------------------- \n 第30部 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n --------------------------------- \n 第37部 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n -- \n', 'tags': '', 'url': 'NX video.html'}, {'title': '期末考週', 'text': 'NX1980版 \n 心得: \n 花了好一陣子的時間做出了這個作業,畫圖中更加深了NX的繪圖技巧,組立零件圖也遇到不少困難,但最後在新組裝了2次之後都一一解決了 \n nx12絞鍊 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n front joint \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '期末考週.html'}]};