    // Função para animar os contadores
    function animateCounters() {
        const counters = [
            { element: document.getElementById('clients-counter'), target: 358 },
            { element: document.getElementById('projects-counter'), target: 123 },
            { element: document.getElementById('hours-counter'), target: 637 }
        ];

        counters.forEach(counter => {
            const duration = 2000;
            const start = 0;
            const increment = counter.target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                    clearInterval(timer);
                    current = counter.target;
                }
                counter.element.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Inicializa os contadores quando a página carrega
    document.addEventListener('DOMContentLoaded', function() {
        animateCounters();
        
        // Restante do seu código de inicialização...
    });

    // Solução alternativa para o CounterUp no slider (se necessário)
    (function ($) {
        $(document).ready(function () {
            // Configura apenas os contadores dentro do slider
            $('.carousel .counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).data('target')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    },
                    complete: function () {
                        $(this).text($(this).data('target'));
                    }
                });
            });
        });
    })(jQuery);

    if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false);
    
        // Aplique classes baseadas no tipo da tag
        if (clone.tagName === 'H1') {
            clone.className = 'text-4xl md:text-6xl font-bold';
        } else if (clone.tagName === 'H4') {
            clone.className = 'text-xl md:text-2xl font-semibold mb-4';
        } else if (clone.tagName === 'P') {
            clone.className = 'text-lg text-muted-foreground mt-2';
        }
    
        element.appendChild(clone);
        typeHtml(clone, node.innerHTML, speed);
        setTimeout(() => typeNode(nodeIndex + 1), node.textContent.length * speed);
    }
    
    function resetAllCounters() {
        const slideCounters = document.querySelectorAll('.carousel .counter');
        slideCounters.forEach(counter => {
            counter.textContent = '0';
        });
    }
    