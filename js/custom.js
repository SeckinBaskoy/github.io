$(document).ready(function() {
      var derece = 0;
      function yerlestirEtiketler() {
        var etiketBulutu = $(".etiket-bulutu");
        var etiketler = etiketBulutu.children(".etiket");
        var sayiEtiketler = etiketler.length;
        var radyanAraligi = (2 * Math.PI) / sayiEtiketler; // Küre üzerindeki her etiketin aralığı

        etiketler.each(function(index) {
          var aci = index * radyanAraligi + derece;
          var merkezX = etiketBulutu.width() / 2;
          var merkezY = etiketBulutu.height() / 2;
          var yariCap = 150; // Küre yarıçapı

          var x = merkezX + yariCap * Math.cos(aci) - $(this).width() / 2;
          var y = merkezY + yariCap * Math.sin(aci) - $(this).height() / 2;

          // Rastgele font büyüklüğü ve stil
          var rastgeleFontBuyuklugu = Math.floor(Math.random() * 10) + 11; // 11 ile 20 arasında rastgele
          var rastgeleStil = Math.random() < 0.5 ? "normal" : "bold";

          $(this).css({
            left: x + "px",
            top: y + "px",
            "font-size": rastgeleFontBuyuklugu + "pt",
            "font-weight": rastgeleStil
          });
        });
      }

      yerlestirEtiketler(); // Sayfa yüklendiğinde etiketleri yerleştir

      // Sayfa yeniden boyutlandığında veya döndüğünde etiketleri tekrar yerleştir
      $(window).on("resize orientationchange", yerlestirEtiketler);

      // Fare tekerleği olayları
      $(".etiket-bulutu").on("wheel", function(event) {
        event.preventDefault();
        var delta = event.originalEvent.deltaY;
        derece += delta / 10; // Hızı ayarlamak için dereceyi değiştir
        yerlestirEtiketler(); // Etiketleri yeni açıya göre yerleştir
      });
    });