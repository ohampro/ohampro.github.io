
{% assign itemValue = include.item %}
{% assign bold = '' %}

{% assign titleDesc = itemValue | split: ': ' %}
{% if titleDesc.size == 2 %}
    {% assign bold = '**' | append: titleDesc[0] | append: '**: ' %}
    {% assign itemValue = titleDesc[1] %}

{% elsif include.bold %}
    {% assign itemValue = '**' | append: itemValue | append: '**' %}

{% endif %}

{% assign ihref = nil %}
{% if itemValue contains '@href=' %}
    {% assign ihref = itemValue | split: '@href=' | last | split: " " | first %}
    {% assign hrefString = '@href=' | append: ihref %}
    {% assign itemValue = itemValue | replace: hrefString, '' %}
{% endif %}

{{ include.indent }}- {{ bold }}{{ itemValue }} {% if ihref %}{% include find_more.html href=ihref %}{% endif %}